import {icreaseAge} from "./09";

var user = {
    name: 'Dimych',
    age: 32,
    address: {
        title: 'Minsk'
    }
}


test('should update age dimych', () => {

    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)

})


test('array test', () => {

    var users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Katya',
            age: 25
        },
        {
            name: 'Dina',
            age: 16
        },
    ]

    var admins = users

    admins.push({name: 'Bad', age: 33})

    expect(users[3]).toEqual({name: 'Bad', age: 33})
})

test('array reference test', () => {

    var usersCount = 100

    var adminsCount = usersCount

    adminsCount = 150

    expect(usersCount).toEqual(150)
})

test('should be update age dimych', () => {
    const address = {
        title: 'Minsk'
    }

    var user = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let addr = {...user.address}

    var user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }


    user2.address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')
})

test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    var user = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    var user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')

})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    const copyLetters = [...letters].sort()

    expect(copyLetters[0]).toBe('a')
    expect(copyLetters[4]).toBe('z')

    // passportist(letters)
    passportist([...letters])

    expect(letters[0]).toBe('c')
})

function passportist(letters: any) {
    letters.sort()
}
