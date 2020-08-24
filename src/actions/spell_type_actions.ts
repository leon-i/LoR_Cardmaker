export const CHANGE_SPELL_TYPE = 'CHANGE_SPELL_TYPE';

interface ChangeSpellTypeAction {
    type: typeof CHANGE_SPELL_TYPE,
    payload: string
};

export type SpellTypeActionTypes = ChangeSpellTypeAction;

export const changeSpellType = (spellType: string) : SpellTypeActionTypes => ({
    type: CHANGE_SPELL_TYPE,
    payload: spellType
});