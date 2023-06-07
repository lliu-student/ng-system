import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.scss'],
})
export class LockScreenComponent {
  @Input() isLocked = false;
  @Output() isLockedChange = new EventEmitter<boolean>();
  currentDateTime = new Date();

  data = {
    blur: false,
    faded: false,
  };

  constructor() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  toSignIn() {
    this.data.blur = true;
    this.data.faded = true;
  }

  signIn() {
    // this.isLocked = false;
    // this.isLockedChange.emit(this.isLocked);
  }
}
