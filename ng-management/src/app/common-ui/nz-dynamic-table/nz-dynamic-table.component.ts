import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicTableModel, PagerModel } from '../models/dynamic-table.model';
import { NzTableQueryParams } from 'ng-zorro-antd/table/src/table.types';

@Component({
  selector: 'nz-dynamic-table',
  templateUrl: './nz-dynamic-table.component.html',
  styleUrls: ['./nz-dynamic-table.component.scss'],
})
export class NzDynamicTableComponent<T> {
  @Input() model = new DynamicTableModel<T>();

  @Input() headers!: string[];
  @Input() data!: any[];
  @Output() onPageIndexChange: EventEmitter<number> = new EventEmitter();
  @Output() onPageSizeChange: EventEmitter<number> = new EventEmitter();
  @Output() onCurrentPageDataChange: EventEmitter<readonly any[]> =
    new EventEmitter();
  @Output() onQueryParamsChange: EventEmitter<NzTableQueryParams> =
    new EventEmitter();

  pageIndexChange(index: number) {
    this.onPageIndexChange.emit(index);
  }

  pageSizeChange(size: number) {
    this.onPageSizeChange.emit(size);
  }

  currentPageDataChange(event: readonly T[]) {
    this.onCurrentPageDataChange.emit(event);
  }

  queryParamsChange(params: NzTableQueryParams) {
    this.onQueryParamsChange.emit(params);
  }

  ngOnInit() {
    console.log('------data', ...this.data);
    for (const iterator of this.data) {
      console.log(iterator);
      for (const header of this.headers) {
        console.log('------header', header);
        console.log('------iterator', iterator);
        console.log('------', iterator[header]);
      }
    }
  }
}
