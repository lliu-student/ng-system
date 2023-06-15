import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopupComponent } from './popup.component';
import { PopupConfig } from './popup-config';
import { PopupRef } from './popup-ref';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open(config: PopupConfig) {
    const overlayRef = this.createOverlay();
    const popupRef = this.attachPopupContainer(overlayRef, config);
    return new PopupRef(popupRef, config);
  }

  private createOverlay() {
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });
    return this.overlay.create(overlayConfig);
  }

  private attachPopupContainer(overlayRef: OverlayRef, config: PopupConfig) {
    const injector = this.createInjector(config);
    const containerPortal = new ComponentPortal(PopupComponent, null, injector);
    const containerRef: ComponentRef<PopupComponent> =
      overlayRef.attach(containerPortal);
    return containerRef;
  }

  private createInjector(config: PopupConfig): Injector {
    return Injector.create({
      providers: [{ provide: PopupConfig, useValue: config }],
      parent: this.injector,
    });
  }
}
