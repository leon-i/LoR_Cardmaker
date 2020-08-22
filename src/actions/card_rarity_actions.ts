export const CHANGE_CARD_RARITY = 'CHANGE_CARD_RARITY';
export const RESET_CARD_RARITY = 'RESET_CARD_RARITY';

interface ChangeCardRarityAction {
    type: typeof CHANGE_CARD_RARITY,
    payload: string
};

interface ResetCardRarityAction {
    type:  typeof RESET_CARD_RARITY
};

export type CardRarityActionTypes = ChangeCardRarityAction | ResetCardRarityAction;

export const changeCardRarity = (cardRarity: string) : CardRarityActionTypes => ({
    type: CHANGE_CARD_RARITY,
    payload: cardRarity
});

export const resetCardRarity = () : CardRarityActionTypes => ({
    type: RESET_CARD_RARITY
});