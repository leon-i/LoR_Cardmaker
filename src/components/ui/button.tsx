import React from 'react';

interface Props {
    children: React.ReactNode,
    onClick: () => void
}

const Button : React.FC<Props> = ({ children, onClick }) => (
    <button className='ui-button' onClick={onClick}>
        {children}
    </button>
);

export default Button;