import { Saiyan } from '@dragonball/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as SaiyanActions from './saiyans.actions';

export const SAIYAN_FEATURE_KEY = 'saiyans';

export interface SaiyanState extends EntityState<Saiyan> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface SaiyanPartialState {
  readonly [SAIYAN_FEATURE_KEY]: SaiyanState;
}

export const saiyanAdapter: EntityAdapter<Saiyan> =
  createEntityAdapter<Saiyan>();

export const initialSaiyanState: SaiyanState = saiyanAdapter.getInitialState({
  loaded: false,
});

const onFailed = (state, { error }): SaiyanState => ({ ...state, error });

const onDispatch = (state, action): SaiyanState => ({
  ...state,
  loaded: false,
  error: null,
});

const _saiyanReducer = createReducer(
  initialSaiyanState,
  on(
    SaiyanActions.loadSaiyanFailed,
    SaiyanActions.loadSaiyansFailed,
    SaiyanActions.createSaiyanFailed,
    SaiyanActions.updateSaiyanFailed,
    SaiyanActions.deleteSaiyanFailed,
    onFailed
  ),
  on(
    SaiyanActions.loadSaiyan,
    SaiyanActions.loadSaiyans,
    SaiyanActions.createSaiyan,
    SaiyanActions.updateSaiyan,
    SaiyanActions.deleteSaiyan,
    onDispatch
  ),
  on(SaiyanActions.loadSaiyanSuccess, (state, { saiyan }) =>
    saiyanAdapter.upsertOne(saiyan, { ...state, loaded: true })
  ),
  on(SaiyanActions.selectSaiyan, (state, { saiyanId }) => ({
    ...state,
    selectedId: saiyanId,
  })),
  on(SaiyanActions.loadSaiyansSuccess, (state, { saiyans }) =>
    saiyanAdapter.setAll(saiyans, { ...state, loaded: true })
  ),
  on(SaiyanActions.deleteSaiyanSuccess, (state, { saiyan }) =>
    saiyanAdapter.removeOne(saiyan.id, { ...state, loaded: true })
  ),
  on(SaiyanActions.updateSaiyanSuccess, (state, { saiyan }) =>
    saiyanAdapter.updateOne(
      { id: saiyan.id, changes: saiyan },
      { ...state, loaded: true }
    )
  ),
  on(SaiyanActions.createSaiyanSuccess, (state, { saiyan }) =>
    saiyanAdapter.addOne(saiyan, { ...state, loaded: true })
  )
);

export function saiyanReducer(state: SaiyanState | undefined, action: Action) {
  return _saiyanReducer(state, action);
}
