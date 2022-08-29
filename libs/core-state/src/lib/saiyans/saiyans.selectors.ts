import { emptySaiyan } from '@dragonball/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  saiyanAdapter,
  SaiyanState,
  SAIYAN_FEATURE_KEY,
} from './saiyans.reducer';

export const getSaiyanState =
  createFeatureSelector<SaiyanState>(SAIYAN_FEATURE_KEY);

const { selectAll, selectEntities } = saiyanAdapter.getSelectors();

export const getSaiyansLoaded = createSelector(
  getSaiyanState,
  (state: SaiyanState) => state.loaded
);

export const getSaiyanError = createSelector(
  getSaiyanState,
  (state: SaiyanState) => state.error
);

export const getAllSaiyans = createSelector(
  getSaiyanState,
  (state: SaiyanState) => selectAll(state)
);

export const getSaiyanEntities = createSelector(
  getSaiyanState,
  (state: SaiyanState) => selectEntities(state)
);

export const getSelectedSaiyanId = createSelector(
  getSaiyanState,
  (state: SaiyanState) => state.selectedId
);

export const getSelectedSaiyan = createSelector(
  getSaiyanEntities,
  getSelectedSaiyanId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptySaiyan
);
