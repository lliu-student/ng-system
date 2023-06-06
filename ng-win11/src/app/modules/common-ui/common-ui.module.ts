import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { PopupComponent } from './components/popup/popup.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

const components = [PopupComponent, DrawerComponent];
const pipes = [CustomDatePipe];
const services: Provider[] = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [...components, ...pipes],
  providers: [...services],
  exports: [...components, ...pipes],
})
export class CommonUIModule {}
