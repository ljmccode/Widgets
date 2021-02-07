import React, {useState} from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//     {
//         title: 'What is React',
//         content: 'React is a frontend JavaScript framework'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favorite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }
// ]

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



const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
            <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown 
                    selected={selected} 
                    options={options}
                    onSelectedChange={setSelected}
                /> : null
            }
            <h3 style={{ color: selected.value }}>{`This text is ${selected.value}`}</h3>
        </div>
    )
};

export default App;