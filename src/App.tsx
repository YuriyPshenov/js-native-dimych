import React from 'react';
import './App.css';
import {ManComponent} from "./07/Destructuring";

function App() {
    const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
    const users = [{name: 'Dimych'}, {name: 'Sveta'}, {name: 'Katya'}, {name: 'Viktor'}, {name: 'Ignat'},]
    const liElements = names.map((el, index) => <li key={index}>{`${el} ${index + 1}`}</li>)
    const liElementsFromUsers = users.map((el, index) => <li key={index}>{`${index + 1} it's object ${el.name}`}</li>)

    const man = {
        name: 'Kakoi-to man',
        age: 32,
        lessons: [
            {title: '1'},
            {title: '2'},
        ],
        address: {
            street: {
                title: 'Nezavisimosti'
            }
        }
    }

    return (
        <div className="App">
            <ul>
                <h1>js-native-dimich</h1>
                <h2>05</h2>
                <h3>Array</h3>
                {liElements}
                <h3>Object</h3>
                {liElementsFromUsers}
                {/*{names.map((el, index) => <li key={index}>{el}</li>)}*/}
                <h2>07</h2>
                <ManComponent title={'ManComponent'} man={man} food={['apple', 'juice']} car={{model: 'bmw6'}}/>
            </ul>
        </div>
    );
}

export default App;
