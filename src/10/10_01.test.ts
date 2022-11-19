import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBookUser, updateCompany, updateCompany2,
    UserType,
    UserWithBookType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test('reference test type', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const cutUser = makeHairstyle(user, 2)

    user = cutUser

    expect(user.hair).toBe(16)
    expect(cutUser.hair).toBe(16)
    expect(cutUser.address.city).toBe(user.address.city)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {

            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
    expect(movedUser.address.house).toBe(12)
})

test('upgrade laptope to macbook', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradedUser = moveUserToOtherHouse(user, 44)


    expect(user).not.toBe(upgradedUser)
    expect(user.address).not.toBe(upgradedUser.address)
    expect(upgradedUser.address.house).toBe(44)
})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradedUser = addNewBooksToUser(user, ['ts', 'rest api'])


    expect(upgradedUser).not.toBe(user)
    expect(upgradedUser.books).not.toBe(user.books)
    expect(upgradedUser.books.length).toBe(6)
    expect(upgradedUser.books[4]).toBe('ts')
    expect(upgradedUser.books[5]).toBe('rest api')
    expect(user.books).not.toBe(upgradedUser.books)
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const upgradedUser = updateBookUser(user, 'js', 'ts')


    expect(upgradedUser).not.toBe(user)
    expect(upgradedUser.books).not.toBe(user.books)
    expect(upgradedUser.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],

    }

    const upgradedUser = removeBook(user, 'js')


    expect(upgradedUser.books.length).toBe(3)
})

test('add new companie', () => {
    let user: UserWithLaptopType & UserWithBookType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const upgradedUser = updateCompany(user, 1, 'Google') as UserWithLaptopType & UserWithBookType & WithCompaniesType


    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.companies).not.toBe(upgradedUser.companies)
    expect(user.companies[0]).not.toBe(upgradedUser.companies[0])
    expect(user.companies[0].title).toBe('Epam')
    expect(upgradedUser.companies.length).toBe(2)
    expect(upgradedUser.companies[0].title).toBe('Google')
    expect(upgradedUser.companies[0].id).toBe(1)
})

test('update company', () => {

    let companies: {[key: string]: Array<{id: number, title: string}>} = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}]
    }

    const upgradeCompanies = updateCompany2(companies, 1, 'Dimych', 'Google')

    expect(upgradeCompanies['Dimych'][0].title).toBe('Google')
    expect(companies['Dimych']).not.toBe(upgradeCompanies['Dimych'])
    expect(companies['Artem']).toBe(companies['Artem'])
})


