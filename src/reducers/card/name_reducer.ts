import { CHANGE_NAME, RESET_NAME, NameActionTypes } from '../../actions/name_actions';

const initialState = '';

export default (state : string = initialState, action: NameActionTypes) : string => {
    switch(action.type) {
        case CHANGE_NAME:
            return action.payload;
        case RESET_NAME:
            return initialState;
        default:
            return state;
    }
}