import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzProgressModule } from 'ng-zorro-antd/progress';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NzPageHeaderModule,
  NzTableModule,
  NzPaginationModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzMessageModule,
  NzModalModule,
  NzDescriptionsModule,
  NzGridModule,
  NzUploadModule,
  NzSelectModule,
  NzInputNumberModule,
  NzRadioModule,
  NzBreadCrumbModule,
  NzStepsModule,
  NzDatePickerModule,
  NzSpinModule,
  NzTabsModule,
  NzCheckboxModule,
  NzPopoverModule,
  NzImageModule,
  NzDropDownModule,
  NzSwitchModule,
  NzTimelineModule,
  NzDividerModule,
  NzResizableModule,
  NzIconModule,
  NzLayoutModule,
  NzCalendarModule,
  NzBadgeModule,
  NzAvatarModule,
  NzSpaceModule,
  NzListModule,
  NzSkeletonModule,
  NzTagModule,
  NzProgressModule,
  NzAvatarModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class NgZorroAntdModule {}
