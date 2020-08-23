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
    changeName, 
    changeHealth,
    changePower,
    changeDescription,
    changeTribe,
    changeLevelUp,
    changeCardType,
    changeCardRarity,
    resetCard }) => {
    const rarities = card.cardType === 'champion' ? Object.values(CARD_RARITIES).slice(4) : Object.values(CARD_RARITIES).slice(0, 4);
    
    return (
        <div className='card-form'>
            <MultiSelect label={'Card Type'} 
                value={card.cardType}
                options={Object.values(CARD_TYPES)} 
                onClick={changeCardType} />
            <div className='number-inputs'>
                <Input label={'Mana'} 
                    numOnly={true}
                    value={card.mana} 
                    onChange={(e) => changeMana(e.target.value)} />
                <Input label={'Health'} 
                    numOnly={true}
                    value={card.health} 
                    onChange={(e) => changeHealth(e.target.value)} />
                <Input label={'Power'} 
                    numOnly={true}
                    value={card.power} 
                    onChange={(e) => changePower(e.target.value)} />
            </div>
            <Input label={'Name'} 
                value={card.name} 
                onChange={(e) => changeName(e.target.value)} />
            <Textarea label={'Description'}
                value={card.description}
                onChange={(e) => changeDescription(e.target.value)} />
            {
                card.cardType === 'champion' &&
                <Textarea label={'Level Up'}
                value={card.levelUp}
                onChange={(e) => changeLevelUp(e.target.value)} />
            }
            <Input label={'Tribe'} 
                value={card.tribe} 
                onChange={(e) => changeTribe(e.target.value)} />
            <MultiSelect label={'Card Rarity'} 
                value={card.cardRarity}
                options={rarities} 
                onClick={changeCardRarity} />
            <Button onClick={resetCard}>
                Reset
            </Button>
        </div>
    )

};

export default CardForm;