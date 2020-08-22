import { CHANGE_MANA, RESET_MANA, ManaActionTypes } from '../../actions/mana_actions';

const initialState = 0;

export default (state : number = initialState, action: ManaActionTypes) : number => {
    switch(action.type) {
        case CHANGE_MANA:
            return action.payload;
        case RESET_MANA:
            return initialState;
        default:
            return state;
    }
}