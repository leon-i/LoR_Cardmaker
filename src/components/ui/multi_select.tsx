import React from 'react';

interface Props {
    label: string,
    options: any,
    value?: string,
    onClick: (e : any) => void
}

const MultiSelect : React.FC<Props> = ({ label, options, value, onClick }) => (
    <div className='ui-multi-select'>
        <span>{label}</span>
        <div className='multi-select-options'>
            {
                options.map((option : string) => <h4 onClick={(e : any) => onClick(option)}>{option.toUpperCase()}</h4>)
            }
        </div>
    </div>
);

export default MultiSelect;