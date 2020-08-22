import { CHANGE_DESCRIPTION, RESET_DESCRIPTION, DescriptionActionTypes } from '../../actions/description_actions';

const initialState = '';

export default (state : string = initialState, action: DescriptionActionTypes) : string => {
    switch(action.type) {
        case CHANGE_DESCRIPTION:
            return action.payload;
        case RESET_DESCRIPTION:
            return initialState;
        default:
            return state;
    }
}