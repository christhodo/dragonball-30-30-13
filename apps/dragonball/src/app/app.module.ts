import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaiyansComponent } from './saiyans/saiyans.component';
import { SaiyansListComponent } from './saiyans/saiyans-list/saiyans-list.component';
import { SaiyanDetailsComponent } from './saiyans/saiyan-details/saiyan-details.component';

@NgModule({
  declarations: [
    AppComponent,

    SaiyansComponent,
    SaiyansListComponent,
    SaiyanDetailsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
