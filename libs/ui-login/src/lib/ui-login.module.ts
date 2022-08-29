import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildComponent } from './wild/wild.component';
import { MaterialModule } from '@dragonball/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [LoginComponent, ToolbarComponent, WildComponent],
  exports: [LoginComponent, ToolbarComponent, WildComponent],
})
export class UiLoginModule {}
