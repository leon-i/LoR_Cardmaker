import { CHANGE_CARD_TYPE, RESET_CARD_TYPE, CardTypeActionTypes} from '../../actions/card_type_actions';

const initialState = 'follower';

export default (state : string = initialState, action: CardTypeActionTypes) : string => {
    switch(action.type) {
        case CHANGE_CARD_TYPE:
            return action.payload;
        case RESET_CARD_TYPE:
            return initialState;
        default:
            return state;
    }
}