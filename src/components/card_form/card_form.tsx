import React from 'react';
import Input from '../ui/input';
import Select from '../ui/select';
import Button from '../ui/button';
import Textarea from '../ui/textarea';
import { changeMana, resetMana } from '../../actions/mana_actions';
import { changeName, resetName } from '../../actions/name_actions';
import { changeDescription, resetDescription } from '../../actions/description_actions';
import { connect } from 'react-redux';

interface CardState {
    mana: number,
    name: string,
    keywords?: string[],
    description: string
}

interface RootState {
    card: CardState
}

interface Props {
    card: CardState,
    changeMana: typeof changeMana,
    resetMana: typeof resetMana,
    changeName: typeof changeName,
    resetName: typeof resetName,
    changeDescription: typeof changeDescription,
    resetDescription: typeof resetDescription
}

const CardForm : React.FC<Props> = ({ card, 
    changeMana, 
    resetMana, 
    changeName, 
    resetName,
    changeDescription,
    resetDescription }) => {
    const resetForm = () => {
        resetMana()
        resetName()
        resetDescription()
    };

    return (
        <div>
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
        </div>
    )

};

const mapStateToProps = ({ card }: RootState) => ({
    card
});

const mapDispatchToProps = ({
    changeMana,
    resetMana,
    changeName,
    resetName,
    changeDescription,
    resetDescription
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);