import { Component } from '@angular/core';

@Component({
  selector: 'dragonball-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'saiyans';
  links = [{ path: 'saiyans', icon: 'view_list', title: 'Saiyans' }];
}
