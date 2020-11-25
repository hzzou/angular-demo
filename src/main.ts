import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// rem 根节点字体只用宽度除10, body标签的字体为14*scale
//import { flex } from './flexible.debug';

// 解决vw的在不同手机上的兼容问题
const hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');

require('viewport-units-buggyfill').init({hacks:hacks})

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
