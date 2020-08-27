export const CHANGE_REGION = 'CHANGE_REGION';

interface ChangeRegionAction {
    type: typeof CHANGE_REGION,
    payload: string
};

export type RegionActionTypes = ChangeRegionAction;

export const changeRegion = (region: string) : RegionActionTypes => ({
    type: CHANGE_REGION,
    payload: region
});