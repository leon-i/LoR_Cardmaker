export const CHANGE_HEALTH = 'CHANGE_HEALTH';
export const CHANGE_POWER = 'CHANGE_POWER';

interface ChangeHealthAction {
    type: typeof CHANGE_HEALTH,
    payload: number
};

interface ChangePowerAction {
    type: typeof CHANGE_POWER,
    payload: number
};

export type CardStatsActionTypes = ChangeHealthAction | ChangePowerAction;

export const changeHealth = (health: number) : CardStatsActionTypes => ({
    type: CHANGE_HEALTH,
    payload: health
});

export const changePower = (power: number) : CardStatsActionTypes => ({
    type: CHANGE_POWER,
    payload: power
});