import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDynamicTableComponent } from './nz-dynamic-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NzDynamicTableComponent],
  imports: [CommonModule, SharedModule],
  exports: [NzDynamicTableComponent],
})
export class NzDynamicTableModule {}
