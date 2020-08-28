export const ADD_KEYWORD = 'ADD_KEYWORD';
export const REMOVE_KEYWORD = 'REMOVE_KEYWORD';

interface AddKeywordAction {
    type: typeof ADD_KEYWORD,
    payload: string
};

interface RemoveKeywordAction {
    type: typeof REMOVE_KEYWORD,
    payload: string
};


export type KeywordActionTypes = AddKeywordAction | RemoveKeywordAction;

export const addKeyword = (keyword: string) : KeywordActionTypes => ({
    type: ADD_KEYWORD,
    payload: keyword
});

export const removeKeyword = (keyword: string) : KeywordActionTypes => ({
    type: REMOVE_KEYWORD,
    payload: keyword
});