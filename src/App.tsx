import React from 'react';
import './App.css';

function App() {
    const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
    const users = [{name: 'Dimych'}, {name: 'Sveta'}, {name: 'Katya'}, {name: 'Viktor'}, {name: 'Ignat'},]
    const liElements = names.map((el, index) => <li key={index}>{`${el} ${index + 1}`}</li>)
    const liElementsFromUsers = users.map((el, index) => <li key={index}>{`${index + 1} it's object ${el.name}`}</li>)

    return (
        <div className="App">
            <ul>
                <h1>Array</h1>
                {liElements}
                <h1>Object</h1>
                {liElementsFromUsers}
                {/*{names.map((el, index) => <li key={index}>{el}</li>)}*/}
            </ul>
        </div>
    );
}

export default App;
