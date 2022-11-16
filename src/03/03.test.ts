import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'your name',
        age: 20,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus',
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML&CSS',
            },
            {
                id: 2,
                title: 'JS&TS',
            },
            {
                id: 3,
                title: 'REACT',
            },
        ]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'Redux')

    expect(student.technologies[3].title).toBe('Redux')
    expect(student.technologies[3].id).toBe(4)

    addSkill(student, 'JS')
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('does student live in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})