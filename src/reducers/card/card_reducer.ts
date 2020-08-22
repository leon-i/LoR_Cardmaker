import { combineReducers } from 'redux';
import manaReducer from './mana_reducer';
import nameReducer from './name_reducer';
import descriptionReducer from './description_reducer';
import cardTypeReducer from './card_type_reducer';
import cardRarityReducer from './card_rarity_reducer';

export interface CardState {
    mana: number,
    name: string,
    keywords?: string[],
    description?: string,
    type: string
}

export default combineReducers({
    mana: manaReducer,
    name: nameReducer,
    description: descriptionReducer,
    cardType: cardTypeReducer,
    cardRarity: cardRarityReducer
});