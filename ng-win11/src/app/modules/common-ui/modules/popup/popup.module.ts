import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PopupComponent } from './popup.component';

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, OverlayModule, DragDropModule],
  exports: [PopupComponent],
})
export class PopupModule {}
