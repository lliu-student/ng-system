import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PopupConfig } from './popup-config';
import { PopupRef } from './popup-ref';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() config!: PopupConfig;
  @Output() close = new EventEmitter();

  constructor(public popupRef: PopupRef) {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }

  onMouseDown(event: MouseEvent) {
    const isHeader = (event.target as HTMLElement).classList.contains(
      'popup-header'
    );
    if (!isHeader) {
      return;
    }
    const popup = this.popupRef.componentRef.location
      .nativeElement as HTMLElement;
    const startX = event.clientX - popup.offsetLeft;
    const startY = event.clientY - popup.offsetTop;
    const move = (e: MouseEvent) => {
      this.popupRef.config.left = e.clientX - startX;
      this.popupRef.config.top = e.clientY - startY;
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  }

  onMin() {
    this.popupRef.config.isMin = true;
  }

  onMax() {
    this.popupRef.config.isMax = true;
  }
}
