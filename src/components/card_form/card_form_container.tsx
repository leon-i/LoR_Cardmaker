import { connect } from 'react-redux';
import { changeMana, resetMana } from '../../actions/mana_actions';
import { changeName, resetName } from '../../actions/name_actions';
import { changeDescription, resetDescription } from '../../actions/description_actions';
import { changeCardType, resetCardType } from '../../actions/card_type_actions';
import { changeCardRarity, resetCardRarity } from '../../actions/card_rarity_actions';
import CardForm from './card_form';

interface CardState {
    mana: number,
    name: string,
    keywords?: string[],
    description: string,
    cardType: string,
    cardRarity: string
}

interface RootState {
    card: CardState
}

export interface Props {
    card: CardState,
    changeMana: typeof changeMana,
    resetMana: typeof resetMana,
    changeName: typeof changeName,
    resetName: typeof resetName,
    changeDescription: typeof changeDescription,
    resetDescription: typeof resetDescription,
    changeCardType: typeof changeCardType,
    resetCardType: typeof resetCardType,
    changeCardRarity: typeof changeCardRarity,
    resetCardRarity: typeof resetCardRarity
}

const mapStateToProps = ({ card }: RootState) => ({
    card
});

const mapDispatchToProps = ({
    changeMana,
    resetMana,
    changeName,
    resetName,
    changeDescription,
    resetDescription,
    changeCardType,
    resetCardType,
    changeCardRarity,
    resetCardRarity
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);