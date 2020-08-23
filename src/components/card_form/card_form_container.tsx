import { connect } from 'react-redux';
import { changeMana } from '../../actions/mana_actions';
import { changeName } from '../../actions/name_actions';
import { changeHealth, changePower } from '../../actions/card_stats_actions';
import { changeDescription } from '../../actions/description_actions';
import { changeTribe } from '../../actions/tribe_actions';
import { changeLevelUp } from '../../actions/level_up_actions';
import { changeCardType } from '../../actions/card_type_actions';
import { changeCardRarity } from '../../actions/card_rarity_actions';
import { resetCard } from '../../actions/card_actions';
import { CardState } from '../../reducers/card/card_reducer';
import CardForm from './card_form';

interface RootState {
    card: CardState
}

export interface Props {
    card: CardState,
    changeMana: typeof changeMana,
    changeName: typeof changeName,
    changeHealth: typeof changeHealth,
    changePower: typeof changePower,
    changeDescription: typeof changeDescription,
    changeTribe: typeof changeTribe,
    changeLevelUp: typeof changeLevelUp,
    changeCardType: typeof changeCardType,
    changeCardRarity: typeof changeCardRarity,
    resetCard: typeof resetCard
}

const mapStateToProps = ({ card }: RootState) => ({
    card
});

const mapDispatchToProps = ({
    changeMana,
    changeName,
    changeHealth,
    changePower,
    changeDescription,
    changeTribe,
    changeLevelUp,
    changeCardType,
    changeCardRarity,
    resetCard
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);