import { combineReducers } from 'redux';
import manaReducer from './mana_reducer';
import nameReducer from './name_reducer';
import descriptionReducer from './description_reducer';

export interface CardState {
    mana: number,
    name: string,
    keywords?: string[],
    description?: string
}

export default combineReducers({
    mana: manaReducer,
    name: nameReducer,
    description: descriptionReducer
});