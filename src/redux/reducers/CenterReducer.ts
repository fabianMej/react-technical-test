import { FIND_CENTERS, FAILED_FETCH_CENTERS ,CenterActionTypes, fetchCenters } from '../types/CenterActionTypes';
import { CenterState } from '../types/types';

const initialState: CenterState = {
    centers: [],
    error: false
}

export function centerReducer(state = initialState, action: CenterActionTypes ): CenterState {
    switch (action.type) {
        case FIND_CENTERS:
            return { ...state, centers: state.centers.concat(action.centers), error: false }
        case FAILED_FETCH_CENTERS: 
            return { ...state, error: true }
        default:
            return state;
    }
}