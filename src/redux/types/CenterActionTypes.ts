import { CenterModel } from "../../models/CenterModel";
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from "redux";
import axios from 'axios';

export const FIND_CENTERS = 'FIND_CENTERS';
export const FAILED_FETCH_CENTERS = 'FAILED_FETCH_CENTERS';

interface findCenterActionType {
    type: typeof FIND_CENTERS,
    centers: CenterModel[]
}

interface failedFetchCentersActionType {
    type: typeof FAILED_FETCH_CENTERS
}

export const setCenters = (centers: CenterModel[]) => {
    return {
        type: FIND_CENTERS,
        centers
    }
}

export const fetchCentersFailes = () => {
    return {
        type: FAILED_FETCH_CENTERS
    }
}

export const fetchCenters = ():ThunkAction<void, {}, {}, AnyAction> => {
    return dispatch => {
        axios.get('5c969e792f00002b002397e7')
            .then(response => {
                dispatch(setCenters(response.data))
            })
            .catch(error => {
                dispatch(fetchCentersFailes());
            });
    }
}

export type CenterActionTypes = findCenterActionType | failedFetchCentersActionType;