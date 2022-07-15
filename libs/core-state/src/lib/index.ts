import { ActionReducerMap } from '@ngrx/store';
import {
  saiyanReducer,
  SaiyanState,
  SAIYAN_FEATURE_KEY,
} from './saiyans/saiyans.reducer';

export interface AppState {
  [SAIYAN_FEATURE_KEY]: SaiyanState;
}

export const reducers: ActionReducerMap<AppState> = {
  [SAIYAN_FEATURE_KEY]: saiyanReducer,
};
