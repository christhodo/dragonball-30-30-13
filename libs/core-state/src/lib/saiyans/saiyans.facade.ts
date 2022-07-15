/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Saiyan } from '@dragonball/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import * as SaiyanActions from './saiyans.actions';
import * as SaiyanSelectors from './saiyans.selectors';
import * as fromSaiyans from './saiyans.reducer';

@Injectable({
  providedIn: 'root',
})
export class SaiyanFacade {
  allSaiyans$ = this.store.pipe(
    map((state) => SaiyanSelectors.getAllSaiyans(state))
  );
  selectedSaiyans$ = this.store.pipe(select(SaiyanSelectors.getSelectedSaiyan));
  loaded$ = this.store.pipe(select(SaiyanSelectors.getSaiyansLoaded));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === SaiyanActions.createSaiyan({} as any).type ||
        action.type === SaiyanActions.updateSaiyan({} as any).type ||
        action.type === SaiyanActions.deleteSaiyan({} as any).type
    )
  );

  selectSaiyan(saiyanId: string) {
    this.dispatch(SaiyanActions.selectSaiyan({ saiyanId }));
  }

  loadSaiyans() {
    this.dispatch(SaiyanActions.loadSaiyans());
  }

  loadSaiyan(saiyanId: string) {
    this.dispatch(SaiyanActions.loadSaiyan({ saiyanId }));
  }

  saveSaiyan(saiyan: Saiyan) {
    saiyan.id ? this.updateSaiyan(saiyan) : this.createSaiyan(saiyan);
  }

  createSaiyan(saiyan: Saiyan) {
    this.dispatch(SaiyanActions.createSaiyan({ saiyan }));
  }

  updateSaiyan(saiyan: Saiyan) {
    this.dispatch(SaiyanActions.updateSaiyan({ saiyan }));
  }

  deleteSaiyan(saiyan: Saiyan) {
    this.dispatch(SaiyanActions.deleteSaiyan({ saiyan }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromSaiyans.SaiyanPartialState>,
    private actions$: ActionsSubject
  ) {}
}
