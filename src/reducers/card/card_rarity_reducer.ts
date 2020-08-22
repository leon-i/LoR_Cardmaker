import { CHANGE_CARD_RARITY, RESET_CARD_RARITY, CardRarityActionTypes} from '../../actions/card_rarity_actions';
import { CHANGE_CARD_TYPE, CardTypeActionTypes } from '../../actions/card_type_actions';

const initialState = 'uncollectable';

export default (state : string = initialState, action: CardRarityActionTypes | CardTypeActionTypes) : string => {
    switch(action.type) {
        case CHANGE_CARD_RARITY:
            return action.payload;
        case RESET_CARD_RARITY:
            return initialState;
        case CHANGE_CARD_TYPE:
            if (action.payload === 'champion') {
                return 'champion';
            } else if (action.payload !== 'champion' && ['champion', 'leveled'].includes(state)) {
                return initialState;
            } else {
                return state;
            }
        default:
            return state;
    }
}