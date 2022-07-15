import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaiyansComponent } from './saiyans/saiyans.component';
import { SaiyansListComponent } from './saiyans/saiyans-list/saiyans-list.component';
import { SaiyanDetailsComponent } from './saiyans/saiyan-details/saiyan-details.component';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@dragonball/material';
import { HttpClientModule } from '@angular/common/http';
import { CoreDataModule } from '@dragonball/core-data';
import { CoreStateModule } from '@dragonball/core-state';
import { UiLoginModule } from '@dragonball/ui-login';
import { EnvironmentModule } from '@dragonball/environment';
import { RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SaiyansComponent,
    SaiyansListComponent,
    SaiyanDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule,
    CoreDataModule,
    CoreStateModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
