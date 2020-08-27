// import { combineReducers } from 'redux';
// import manaReducer from './mana_reducer';
// import nameReducer from './name_reducer';
// import descriptionReducer from './description_reducer';
// import cardTypeReducer from './card_type_reducer';
// import cardRarityReducer from './card_rarity_reducer';

import { CHANGE_MANA, ManaActionTypes } from '../../actions/mana_actions';
import { CHANGE_NAME, NameActionTypes } from '../../actions/name_actions';
import { CHANGE_HEALTH, CHANGE_POWER, CardStatsActionTypes } from '../../actions/card_stats_actions';
import { CHANGE_DESCRIPTION, DescriptionActionTypes } from '../../actions/description_actions';
import { CHANGE_REGION, RegionActionTypes } from '../../actions/region_actions';
import { CHANGE_TRIBE, TribeActionTypes } from '../../actions/tribe_actions';
import { CHANGE_LEVEL_UP, LevelUpActionTypes } from '../../actions/level_up_actions';
import { CHANGE_CARD_RARITY, CardRarityActionTypes} from '../../actions/card_rarity_actions';
import { CHANGE_CARD_TYPE, CardTypeActionTypes} from '../../actions/card_type_actions';
import { CHANGE_SPELL_TYPE, SpellTypeActionTypes } from '../../actions/spell_type_actions';
import { UPLOAD_IMAGE, UploadImageActionTypes } from '../../actions/upload_image_actions';
import { RESET_CARD, ResetCardAction } from '../../actions/card_actions';

export interface CardState {
    mana: number | string,
    name: string,
    health: number | string,
    power: number | string,
    keywords?: string[],
    description: string,
    region: string,
    tribe: string,
    levelUp: string,
    imageURL: string | ArrayBuffer | null,
    cardType: string,
    cardRarity: string,
    spellType: string
}

type CardActionTypes = ManaActionTypes | 
                    NameActionTypes | 
                    CardStatsActionTypes |
                    DescriptionActionTypes | 
                    RegionActionTypes | 
                    TribeActionTypes | 
                    LevelUpActionTypes | 
                    CardRarityActionTypes | 
                    CardTypeActionTypes | 
                    SpellTypeActionTypes | 
                    UploadImageActionTypes | 
                    ResetCardAction;

// export default combineReducers({
//     mana: manaReducer,
//     name: nameReducer,
//     description: descriptionReducer,
//     cardType: cardTypeReducer,
//     cardRarity: cardRarityReducer
// });

const initialState : CardState = {
    mana: '',
    name: '',
    health: '',
    power: '',
    description: '',
    region: 'runeterra',
    tribe: '',
    levelUp: '',
    imageURL: '',
    cardType: 'follower',
    cardRarity: 'uncollectable',
    spellType: 'burst'
};

export default (state : CardState = initialState, action: CardActionTypes) : CardState => {
    Object.freeze(state);
    switch(action.type) {
        case CHANGE_MANA:
            return Object.assign({}, state, { mana: action.payload });
        case CHANGE_NAME:
            return Object.assign({}, state, { name: action.payload });
        case CHANGE_HEALTH:
            return Object.assign({}, state, { health: action.payload });
        case CHANGE_POWER:
            return Object.assign({}, state, { power: action.payload });
        case CHANGE_DESCRIPTION:
            return Object.assign({}, state, { description: action.payload });
        case CHANGE_REGION:
            return Object.assign({}, state, { region: action.payload });
        case CHANGE_TRIBE:
            return Object.assign({}, state, { tribe: action.payload });
        case CHANGE_LEVEL_UP:
            return Object.assign({}, state, { levelUp: action.payload });
        case CHANGE_CARD_TYPE:
            if (action.payload === 'champion') {
                return Object.assign({}, state, { cardType: action.payload, cardRarity: action.payload});
            } else {
                return Object.assign({}, state, { cardType: action.payload, cardRarity: 'uncollectable'});
            }
        case CHANGE_CARD_RARITY:
            return Object.assign({}, state, { cardRarity: action.payload });
        case CHANGE_SPELL_TYPE:
            if (action.payload === 'skill') {
                return Object.assign({}, state, { spellType: action.payload, cardRarity: 'uncollectable'});
            } else {
                return Object.assign({}, state, { spellType: action.payload });
            }
        case UPLOAD_IMAGE:
            return Object.assign({}, state, { imageURL: action.payload });
        case RESET_CARD:
            return initialState;
        default:
            return state;
    }
}