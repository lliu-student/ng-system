import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.scss'],
})
export class LockScreenComponent {
  @Input() isLocked = false;
  @Output() isLockedChange = new EventEmitter<boolean>();
  currentDateTime = new Date();

  constructor() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  signIn() {
    this.isLocked = false;
    this.isLockedChange.emit(this.isLocked);
  }
}
