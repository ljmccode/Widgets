import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    {
        title: 'What is React',
        content: 'React is a frontend JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSeleted] = useState(options[0])

    return (
        <div>
            <Header />
            <div className="ui container">
                <Route path="/">
                    <Accordion items={items}/>
                </Route>
                <Route path="/list">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSeleted}
                        />
                    <h3 style={{ color: selected.value }}>{`This text is ${selected.value}`}</h3>
                </Route>
                <Route path="/translate">
                    <Translate/>
                </Route>
            </div>
        </div>
    )
}