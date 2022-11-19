import exp from "constants";

export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {

    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBookType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = UserType & {
    companies: Array<{id: number, title: string}>
}


export const makeHairstyle = (u: UserType, power: number) => {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    return userCopy
}

export const moveUser = (u: UserWithLaptopType, newCity: string) => ({
    ...u,
    address: {...u.address, city: newCity}
})

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBookType, house: number) => ({
    ...u,
    address: {...u.address, house: house}
})

export const upgradeUserLaptop = (u: UserWithLaptopType & UserWithBookType, laptop: string) => ({
    ...u,
    laptop: {...u.laptop, title: laptop}
})

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBookType, books: Array<string>) => ({
    ...u,
    books: [...u.books, ...books]
})

export const updateBookUser = (u: UserWithLaptopType & UserWithBookType, book: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === book ? newBook : b),
    // books: u.books.reduce((acc: Array<string>, b) => b === book ? [...acc, newBook] : [...acc, b], [])
})

export const removeBook = (u: UserWithLaptopType & UserWithBookType, book: string) => ({
    ...u,
    books: u.books.filter(b => b !== book),
    // books: u.books.reduce((acc: Array<string>, b) => b === book ? [...acc, newBook] : [...acc, b], [])
})

export const updateCompany = (u: WithCompaniesType, id: number, company: string) => ({
    ...u,
    companies: u.companies.map(c => c.id === id ? {...c, title: company} : c)
})

export const updateCompany2 = (c: {[key: string]: Array<{id: number, title: string}>}, id: number, name: string, comp: string) => ({
    ...c,
    [name]: c[name].map(c => c.id === id ? {...c, id, title: comp} : c)
})



