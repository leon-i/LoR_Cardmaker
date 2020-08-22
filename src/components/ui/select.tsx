import React from 'react';

interface Props {
    label: string,
    options: any,
    value?: string,
    onChange?: (e : any) => void
}

const Select : React.FC<Props> = ({ label, options, value, onChange }) => (
    <div className='ui-select'>
        <span>{label}</span>
        <select value={value} onChange={onChange}>
            {options.map((option : number | string) => <option value={option}>
                {option}
            </option>)}
        </select>
    </div>
);

export default Select;