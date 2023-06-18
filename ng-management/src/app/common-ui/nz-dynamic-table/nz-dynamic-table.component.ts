import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicTableModel } from './models/dynamic-table.model';
import { NzTableQueryParams } from 'ng-zorro-antd/table/src/table.types';
import { DynamicHeaderModel } from './models/dynamic-header.model';
import { DynamicDataModel } from './models/dynamic-data.model';

@Component({
  selector: 'nz-dynamic-table',
  templateUrl: './nz-dynamic-table.component.html',
  styleUrls: ['./nz-dynamic-table.component.scss'],
})
export class NzDynamicTableComponent<T> {
  @Input() model = new DynamicTableModel<T>();
  @Input() headers = new Array<DynamicHeaderModel>();
  @Input() data = new Array<DynamicDataModel<T>>();

  @Output() onPageIndexChange: EventEmitter<number> = new EventEmitter();
  @Output() onPageSizeChange: EventEmitter<number> = new EventEmitter();
  @Output() onCurrentPageDataChange: EventEmitter<readonly any[]> =
    new EventEmitter();
  @Output() onQueryParamsChange: EventEmitter<NzTableQueryParams> =
    new EventEmitter();
  @Output() onThHeaderCheckedChange: EventEmitter<{
    event: boolean;
    header: DynamicHeaderModel;
  }> = new EventEmitter();

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

  headerCheckedChange(event: boolean, header: DynamicHeaderModel) {
    this.onThHeaderCheckedChange.emit({ event, header });
  }

  ngOnInit() {}
}
