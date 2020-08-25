import React from 'react';

interface Props {
    label: string,
    value?: string | number,
    onChange: (e : any) => void
}

const Slider : React.FC<Props> = ({ label, value, onChange }) => {
    return (
        <div className='ui-input slider'>
            <span>{label}</span>
            <input type="range" min="60" max="180" value={value} onChange={onChange}></input>
        </div>
    )
};

export default Slider;