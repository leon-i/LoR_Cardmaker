import React from 'react';
import Input from '../ui/input';
import Select from '../ui/select';
import Button from '../ui/button';
import MultiSelect from '../ui/multi_select';
import Textarea from '../ui/textarea';
import { Props } from './card_form_container';
import CARD_TYPES from '../../constants/card_types';
import CARD_RARITIES from '../../constants/card_rarities';
import SPELL_TYPES from '../../constants/spell_types';
import DISPLAYED_KEYWORDS from '../../constants/displayed_keywords';
import RegionDisplay from '../region_display/region_display';

const getRarities = (cardType : string, spellType : string) => {
    const rarityArr = Object.values(CARD_RARITIES);

    switch(cardType) {
        case CARD_TYPES.CHAMPION:
            return rarityArr.slice(4);
        case CARD_TYPES.SPELL:
            return spellType === SPELL_TYPES.SKILL ? [ CARD_RARITIES.UNCOLLECTABLE ] : rarityArr.slice(0, 4);
        default:
            return rarityArr.slice(0, 4);
    }
};

const CardForm : React.FC<Props> = ({ card, 
    changeMana, 
    changeName, 
    changeHealth,
    changePower,
    changeDescription,
    addKeyword,
    removeKeyword,
    changeRegion,
    changeTribe,
    changeLevelUp,
    changeCardType,
    changeCardRarity,
    changeSpellType,
    resetCard }) => {

    const rarities = getRarities(card.cardType, card.spellType);
    const isLevelOneChampion : boolean = (card.cardType === CARD_TYPES.CHAMPION 
        && card.cardRarity === CARD_RARITIES.CHAMPION);
    
    return (
        <div className='card-form'>
            <MultiSelect label={'Card Type'} 
                value={card.cardType}
                options={Object.values(CARD_TYPES)} 
                onClick={changeCardType} />
            {
                card.cardType === CARD_TYPES.SPELL && 
                <MultiSelect label={'Spell Type'} 
                    value={card.spellType}
                    options={Object.values(SPELL_TYPES)} 
                    onClick={changeSpellType} />
            }
            <div className='card-form-body'>
                <div className='number-inputs'>
                    <Input label={'Mana'} 
                        numOnly={true}
                        value={card.mana} 
                        onChange={(e) => changeMana(e.target.value)} />
                    <Input label={'Power'} 
                        numOnly={true}
                        value={card.power} 
                        onChange={(e) => changePower(e.target.value)} />
                    <Input label={'Health'} 
                        numOnly={true}
                        value={card.health} 
                        onChange={(e) => changeHealth(e.target.value)} />
                </div>
                <div className='text-inputs'>
                    <div className='small-inputs'>
                        <Input label={'Name'} 
                            value={card.name} 
                            onChange={(e) => changeName(e.target.value)} />
                        <Input label={'Tribe'} 
                            value={card.tribe} 
                            onChange={(e) => changeTribe(e.target.value)} />
                    </div>
                    <Textarea label={'Description'}
                        value={card.description}
                        onChange={(e) => changeDescription(e.target.value)} />
                    {
                        isLevelOneChampion &&
                        <Textarea label={'Level Up'}
                            value={card.levelUp}
                            onChange={(e) => changeLevelUp(e.target.value)} />
                    }
                </div>
                <Select label={'Keywords'} 
                    options={Object.values(DISPLAYED_KEYWORDS)} 
                    values={card.keywords} 
                    onClickAdd={(e) => addKeyword(e.target.innerHTML)}
                    onClickRemove={(e) => removeKeyword(e.target.innerHTML)}
                    large={isLevelOneChampion} />
            </div>
            <RegionDisplay region={card.region} 
                select={true} 
                onClick={changeRegion} />
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