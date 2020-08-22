import React from 'react';
import CardFormContainer from '../card_form/card_form_container';
import CardDisplay from '../card_display/card_display';

const Splash : React.FC = () => (
    <div className='splash'>
        <CardDisplay />
        <CardFormContainer />
    </div>
)

export default Splash;