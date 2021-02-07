import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current && ref.current.contains(event.target)) {
            return;
          }
          setOpen(false);
        };
       
        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        }
      }, []);

    const renderedOptions = options.map((option) => {
        if (selected.value === option.value) {
            // if value already selected, don't render anything
            return null
        }

        return (
            <div key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })
    return (
        <React.Fragment>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">Select a Color</label>
                    <div 
                        onClick={() => setOpen(!open)} 
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
            <h3 style={{ color: selected.value }}>{`This text is ${selected.value}`}</h3>
        </React.Fragment>
    )
}

export default Dropdown;