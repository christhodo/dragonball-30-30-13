import { createAction, props } from '@ngrx/store';
import { Saiyan } from '@dragonball/api-interfaces';

// Select Entity

export const selectSaiyan = createAction(
  '[SAIYAN] Select Saiyan',
  props<{ saiyanId: string }>()
);

// Load all Entities

export const loadSaiyans = createAction('[SAIYAN] Load Saiyans');

export const loadSaiyansSuccess = createAction(
  '[SAIYAN] Load Saiyans Success',
  props<{ saiyans: Saiyan[] }>()
);

export const loadSaiyansFailed = createAction(
  '[SAIYAN] Load Saiyans Failed',
  props<{ error: unknown }>()
);

// Load Single Entity

export const loadSaiyan = createAction(
  '[SAIYAN] Load Saiyan',
  props<{ saiyanId: string }>()
);

export const loadSaiyanSuccess = createAction(
  '[SAIYAN] Load Saiyan Success',
  props<{ saiyan: Saiyan }>()
);

export const loadSaiyanFailed = createAction(
  '[SAIYAN] Load Saiyan Failed',
  props<{ error: unknown }>()
);

// Load Create Entity

export const createSaiyan = createAction(
  '[SAIYAN] Create Saiyan',
  props<{ saiyan: Saiyan }>()
);

export const createSaiyanSuccess = createAction(
  '[SAIYAN] Create Saiyan Success',
  props<{ saiyan: Saiyan }>()
);

export const createSaiyanFailed = createAction(
  '[SAIYAN] Create Saiyan Failed',
  props<{ error: unknown }>()
);

// Load Update Entity

export const updateSaiyan = createAction(
  '[SAIYAN] Update Saiyan',
  props<{ saiyan: Saiyan }>()
);

export const updateSaiyanSuccess = createAction(
  '[SAIYAN] Update Saiyan Success',
  props<{ saiyan: Saiyan }>()
);

export const updateSaiyanFailed = createAction(
  '[SAIYAN] Create Saiyan Failed',
  props<{ error: unknown }>()
);

// Load Delete Entity

export const deleteSaiyan = createAction(
  '[SAIYAN] Delete Saiyan',
  props<{ saiyan: Saiyan }>()
);

export const deleteSaiyanSuccess = createAction(
  '[SAIYAN] Delete Saiyan Success',
  props<{ saiyan: Saiyan }>()
);

export const deleteSaiyanFailed = createAction(
  '[SAIYAN] Create Saiyan Failed',
  props<{ error: unknown }>()
);
