import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import {AppModule} from "./app/app.module";
import "zone.js/dist/zone";

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props: Object) {
  // console.log(props[0].data);
}

export async function mount(props: Object) {

  render();
}

export async function unmount(props: Object) {
  // console.log(props);
  // @ts-ignore
  app.destroy();
}
