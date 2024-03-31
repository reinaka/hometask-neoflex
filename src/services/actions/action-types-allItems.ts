export const SWITCH_FAVORITE : 'SWITCH_FAVORITE' = 'SWITCH_FAVORITE';

export interface ISwitchFavorite {
    readonly type: typeof SWITCH_FAVORITE,
    readonly payload: string
}

export type allItemsActions = ISwitchFavorite;