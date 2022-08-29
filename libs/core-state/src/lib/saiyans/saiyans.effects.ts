import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Saiyan } from '@dragonball/api-interfaces';
import { SaiyansService } from '@dragonball/core-data';
import * as SaiyanActions from './saiyans.actions';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

@Injectable()
export class SaiyanEffects {
  loadSaiyan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SaiyanActions.loadSaiyan),
      fetch({
        run: (action) =>
          this.saiyansService
            .getOne(action.saiyanId)
            .pipe(
              map((saiyan: Saiyan) =>
                SaiyanActions.loadSaiyanSuccess({ saiyan })
              )
            ),
        onError: (_action, error) => SaiyanActions.loadSaiyanFailed({ error }),
      })
    )
  );
  loadSaiyans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SaiyanActions.loadSaiyans),
      fetch({
        run: () =>
          this.saiyansService
            .all()
            .pipe(
              map((saiyans: Saiyan[]) =>
                SaiyanActions.loadSaiyansSuccess({ saiyans })
              )
            ),
        onError: (_action, error) => SaiyanActions.loadSaiyansFailed({ error }),
      })
    )
  );
  createSaiyan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SaiyanActions.createSaiyan),
      pessimisticUpdate({
        run: (action) =>
          this.saiyansService
            .create(action.saiyan)
            .pipe(
              map((saiyan: Saiyan) =>
                SaiyanActions.createSaiyanSuccess({ saiyan })
              )
            ),
        onError: (_action, error) =>
          SaiyanActions.createSaiyanFailed({ error }),
      })
    )
  );

  updateSaiyan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SaiyanActions.updateSaiyan),
      pessimisticUpdate({
        run: (action) =>
          this.saiyansService
            .update(action.saiyan)
            .pipe(
              map((saiyan: Saiyan) =>
                SaiyanActions.updateSaiyanSuccess({ saiyan })
              )
            ),
        onError: (_action, error) =>
          SaiyanActions.updateSaiyanFailed({ error }),
      })
    )
  );

  deleteSaiyan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SaiyanActions.deleteSaiyan),
      pessimisticUpdate({
        run: (action) =>
          this.saiyansService.delete(action.saiyan).pipe(
            map(() =>
              SaiyanActions.deleteSaiyanSuccess({
                saiyan: action.saiyan,
              })
            )
          ),
        onError: (_action, error) =>
          SaiyanActions.deleteSaiyanFailed({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private saiyansService: SaiyansService
  ) {}
}
