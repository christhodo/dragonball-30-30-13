import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Saiyan } from '@dragonball/api-interfaces';

@Component({
  selector: 'dragonball-saiyans-list',
  templateUrl: './saiyans-list.component.html',
  styleUrls: ['./saiyans-list.component.scss'],
})
export class SaiyansListComponent {
  @Input() saiyans: Saiyan[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
