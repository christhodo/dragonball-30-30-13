/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '.';
import { SaiyanEffects } from './saiyans/saiyans.effects';
import { SaiyanFacade } from './saiyans/saiyans.facade';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([SaiyanEffects]),
    StoreDevtoolsModule.instrument({ name: 'Saiyans-App' }),
  ],
  providers: [SaiyanFacade],
})
export class CoreStateModule {}
