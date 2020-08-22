import React from 'react';
import CardForm from '../card_form/card_form';
import CardDisplay from '../card_display/card_display';

const Splash : React.FC =  () => (
    <div className='splash'>
        <CardForm />
        <CardDisplay />
    </div>
)

export default Splash;