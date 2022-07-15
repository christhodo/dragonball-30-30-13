import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Saiyan } from '@dragonball/api-interfaces';

@Component({
  selector: 'dragonball-saiyan-details',
  templateUrl: './saiyan-details.component.html',
  styleUrls: ['./saiyan-details.component.scss'],
})
export class SaiyanDetailsComponent {
  currentSaiyan: Saiyan;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set saiyan(value) {
    if (value) this.originalTitle = value.name;
    this.currentSaiyan = { ...value };
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}
