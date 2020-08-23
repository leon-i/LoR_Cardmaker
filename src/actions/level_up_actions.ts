export const CHANGE_LEVEL_UP = 'CHANGE_LEVEL_UP';

interface ChangeLevelUpAction {
    type: typeof CHANGE_LEVEL_UP,
    payload: string
};

export type LevelUpActionTypes = ChangeLevelUpAction;

export const changeLevelUp = (levelUp: string) : LevelUpActionTypes => ({
    type: CHANGE_LEVEL_UP,
    payload: levelUp
});