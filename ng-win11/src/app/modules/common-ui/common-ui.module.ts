import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { PopupComponent } from './components/popup/popup.component';

const components = [PopupComponent];
const services: Provider[] = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [...components],
  providers: [...services],
  exports: [...components],
})
export class CommonUIModule {}
