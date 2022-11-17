import {CoursesType} from "./04";

test('should take old men older than 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    // const predicate = (age: number) => {
    //     return age > 90
    // }
    // const predicate = (age: number) => age > 90
    //
    // const oldAges1 = ages.filter(predicate)
    //
    // const oldAges2 = ages.filter((age) => { return age > 90})
    const oldAges = ages.filter(age => age > 90)


    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take chip courses chipper than 160', () => {
    const courses: Array<CoursesType> = [
        {title: 'css', price: 100},
        {title: 'js', price: 200},
        {title: 'react', price: 150},
    ]

    // const chipPredicate = (course: CoursesType) => course.price < 160
    //
    // const chipPredicate2 = (course: CoursesType) => {
    //     return  course.price < 160
    // }

    // const chipCourses = courses.filter(chipPredicate)
    const chipCourses = courses.filter(course => course.price < 160)


    expect(chipCourses[0].price).toBe(100)
    expect(chipCourses[1].price).toBe(150)
    expect(chipCourses.length).toBe(2)
})

test('get only comleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Meat', isDone: true},
        {id: 3, title: 'Milk', isDone: false},
        {id: 4, title: 'Beer', isDone: true},
    ]

    const isDoneTasks = tasks.filter(t => t.isDone)

    expect(isDoneTasks[0].title).toBe('Meat')
    expect(isDoneTasks[1].title).toBe('Beer')
    expect(isDoneTasks[0].id).toBe(2)
    expect(isDoneTasks.length).toBe(2)
})

test('get only uncomleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Meat', isDone: true},
        {id: 3, title: 'Milk', isDone: false},
        {id: 4, title: 'Beer', isDone: true},
    ]

    const isntDoneTasks = tasks.filter(t => !t.isDone)

    // const isDoneTasks2 = tasks.filter(function (tasks) {
    //     return !tasks.isDone
    // })

    expect(isntDoneTasks[0].title).toBe('Bread')
    expect(isntDoneTasks[1].title).toBe('Milk')
    expect(isntDoneTasks[1].id).toBe(3)
    expect(isntDoneTasks.length).toBe(2)
})
