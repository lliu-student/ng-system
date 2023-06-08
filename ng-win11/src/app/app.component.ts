import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-win11';
  isLocked = true;

  constructor() {
    this.isLocked = localStorage.getItem('isLocked') !== 'false';
  }

  isLockedChange() {
    this.isLocked = false;
    // localStorage.setItem('isLocked', 'false');
  }
}
