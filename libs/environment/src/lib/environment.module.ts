import { NgModule, ModuleWithProviders } from '@angular/core';
import { SAIYAN_ENVIRONMENT } from './saiyans.token';
import { SaiyanEnvironment } from './saiyans.model';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: SaiyanEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: SAIYAN_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
