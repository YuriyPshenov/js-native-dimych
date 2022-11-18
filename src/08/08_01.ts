export const usersArray1 = ['Dimych', 'Natasha', 'Valera', 'Katya']

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '133': {id: 133, name: 'Natasha'},
    '13431': {id: 13431, name: 'Valera'},
    '1511': {id: 1511, name: 'Katya'},
}

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 133, name: 'Natasha'},
    {id: 13431, name: 'Valera'},
    {id: 1511, name: 'Katya'}
]

var user = {id: 100500, name: 'Igor'}

users[user.id] = user

delete users[user.id]
