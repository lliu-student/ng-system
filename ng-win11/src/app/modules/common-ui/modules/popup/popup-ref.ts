import { PopupComponent } from './popup.component';
import { PopupConfig } from './popup-config';
import { ComponentRef } from '@angular/core';

export class PopupRef {
  constructor(
    public componentRef: ComponentRef<PopupComponent>,
    public config: PopupConfig
  ) {}
}
