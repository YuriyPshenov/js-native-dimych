import {UsersType} from "./08_01";


let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '133': {id: 133, name: 'Natasha'},
        '13431': {id: 13431, name: 'Valera'},
        '1': {id: 1511, name: 'Katya'},
    }
})

test('should update correspinding user from obj', () => {
    users['1'].name = 'Ekaterina'

    expect(users['1']).toEqual({id: 1511, name: 'Ekaterina'})
})

test('should delete correspinding user from obj', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})