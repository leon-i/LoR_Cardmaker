import React from 'react';

interface Props {
    label: string,
    value?: string | number,
    onChange?: (e : any) => void
}

const Textarea : React.FC<Props> = ({ label, value, onChange }) => (
    <div className='ui-textarea'>
        <span>{label}</span>
        <textarea value={value} onChange={onChange}></textarea>
    </div>
);

export default Textarea;