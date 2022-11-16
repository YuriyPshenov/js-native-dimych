

type LocalCityType = {
    title: string
    countryTitle: string
}

type LocalAddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechnologiesType>
}


const student: StudentType = {
    id: 1,
    name: 'your name',
    age: 20,
    isActive: true,
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

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)