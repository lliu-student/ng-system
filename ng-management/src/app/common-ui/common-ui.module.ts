import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDynamicTableComponent } from './ng-dynamic-table/ng-dynamic-table.component';
import { SharedModule } from '../shared/shared.module';
import { NzDynamicTableModule } from './nz-dynamic-table/nz-dynamic-table.module';

const components = [NgDynamicTableComponent];
const modules = [NzDynamicTableModule];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule, ...modules],
  exports: [...components],
})
export class CommonUiModule {}
