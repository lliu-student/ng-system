import { NgZorroAntdModule } from './modules/ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { IconsProviderModule } from './modules/icons-provider.module';

const modules = [
  NgZorroAntdModule,
  IconsProviderModule,
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: []
})
export class SharedModule {}
