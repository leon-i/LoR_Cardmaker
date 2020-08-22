import React from 'react';
import Input from '../ui/input';
import Select from '../ui/select';
import Button from '../ui/button';
import MultiSelect from '../ui/multi_select';
import Textarea from '../ui/textarea';
import { Props } from './card_form_container';
import CARD_TYPES from '../../constants/card_types';
import CARD_RARITIES from '../../constants/card_rarities';

const CardForm : React.FC<Props> = ({ card, 
    changeMana, 
    resetMana, 
    changeName, 
    resetName,
    changeDescription,
    resetDescription,
    changeCardType,
    resetCardType,
    changeCardRarity,
    resetCardRarity }) => {
    const resetForm = () => {
        resetMana()
        resetName()
        resetDescription()
        resetCardType()
        resetCardRarity()
    };

    const rarities = card.cardType === 'champion' ? Object.values(CARD_RARITIES).slice(4) : Object.values(CARD_RARITIES).slice(0, 4);
    
    return (
        <div className='card-form'>
            <MultiSelect label={'Card Type'} options={Object.values(CARD_TYPES)} onClick={changeCardType} />
            <Input label={'Mana'} 
                numOnly={true}
                value={card.mana} 
                onChange={(e) => changeMana(e.target.value)} />
            <Input label={'Name'} 
                value={card.name} 
                onChange={(e) => changeName(e.target.value)} />
            <Textarea label={'Description'}
                value={card.description}
                onChange={(e) => changeDescription(e.target.value)} />
            <Button onClick={resetForm}>
                Reset
            </Button>
            <MultiSelect label={'Card Rarity'} options={rarities} onClick={changeCardRarity} />
        </div>
    )

};

export default CardForm;