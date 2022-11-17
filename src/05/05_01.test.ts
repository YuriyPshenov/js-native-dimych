import {createGreetinMessage, ManType} from "./05_01";


let people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetinMessage(people)

    expect(messages[0]).toBe('Hello Andrew Ivanov. Welcome to IT-Incubator!')
    expect(messages[1]).toBe('Hello Alexander Petrov. Welcome to IT-Incubator!')
    expect(messages[2]).toBe('Hello Dmitry Sidorov. Welcome to IT-Incubator!')
    expect(messages.length).toBe(3)

})
