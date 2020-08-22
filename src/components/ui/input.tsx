import React from 'react';

interface Props {
    label: string,
    numOnly?: boolean,
    value?: string | number,
    onChange?: (e : any) => void
}

const Input : React.FC<Props> = ({ label, value, numOnly, onChange }) => (
    <div className='ui-input'>
        <span>{label}</span>
        {
            numOnly ? (
                <input type='number' value={value} onChange={onChange} />
            ) : (
                <input value={value} onChange={onChange} />  
            )
        }
    </div>
);

export default Input;