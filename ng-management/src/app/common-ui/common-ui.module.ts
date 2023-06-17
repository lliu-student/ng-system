import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDynamicTableComponent } from './ng-dynamic-table/ng-dynamic-table.component';
import { NzDynamicTableComponent } from './nz-dynamic-table/nz-dynamic-table.component';
import { SharedModule } from '../shared/shared.module';

const components = [NgDynamicTableComponent, NzDynamicTableComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule],
  exports: [...components],
})
export class CommonUiModule {}
