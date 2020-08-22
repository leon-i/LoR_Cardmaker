export const CHANGE_CARD_TYPE = 'CHANGE_CARD_TYPE';
export const RESET_CARD_TYPE = 'RESET_CARD_TYPE';

interface ChangeCardTypeAction {
    type: typeof CHANGE_CARD_TYPE,
    payload: string
};

interface ResetCardTypeAction {
    type:  typeof RESET_CARD_TYPE
};

export type CardTypeActionTypes = ChangeCardTypeAction | ResetCardTypeAction;

export const changeCardType = (cardType: string) : CardTypeActionTypes => ({
    type: CHANGE_CARD_TYPE,
    payload: cardType
});

export const resetCardType = () : CardTypeActionTypes => ({
    type: RESET_CARD_TYPE
});