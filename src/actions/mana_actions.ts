export const CHANGE_MANA = 'CHANGE_MANA';
export const RESET_MANA = 'RESET_MANA';

interface ChangeManaAction {
    type: typeof CHANGE_MANA,
    payload: number
};

interface ResetManaAction {
    type:  typeof RESET_MANA
};

export type ManaActionTypes = ChangeManaAction | ResetManaAction;

export const changeMana = (mana: number) : ManaActionTypes => ({
    type: CHANGE_MANA,
    payload: mana
});

export const resetMana = () : ManaActionTypes => ({
    type: RESET_MANA
});