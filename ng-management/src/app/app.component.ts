import { Component } from '@angular/core';
import { PagerModel } from './common-ui/nz-dynamic-table/models/dynamic-table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-management';

  headers: string[] = ['name', 'age'];

  itemsList: any[] = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    // 其他对象...
  ];

  pager: PagerModel = {
    pageIndex: 1,
    pageSize: 1,
  };

  pageSizeOptions: number[] = [10, 25, 50, 100];

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  pageIndexChange(index: number) {
    console.log('------index', index);
  }

  pageSizeChange(size: number) {
    console.log('------size', size);
  }
}
