import { CenterModel } from '../../models/CenterModel';

export interface CenterState {
    centers: CenterModel[],
    error: boolean
}