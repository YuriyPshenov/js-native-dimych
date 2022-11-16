import {StudentType} from "../02/02";
import {CityType, governmentBuildingsType, HousesType} from "../02/02_02";


export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: student.technologies.length + 1, title: skill})
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName
}

export const addMoneyToBudget = (gb: governmentBuildingsType, budget: number) => {
    gb.budget += budget
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}

export const toFireStaff = (gb: governmentBuildingsType, staff: number) => {
    gb.staffCount -= staff
}

export const toHireStaff = (gb: governmentBuildingsType, staff: number) => {
    gb.staffCount += staff
}

export const createMessage = (city: CityType) => {
    return `Good morning ${city.title}. It lives in New York ${city.citizensNumber} citizens!`
}