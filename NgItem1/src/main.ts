import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

if (environment.production) {
  enableProdMode();
}
declare const require;
let lg = localStorage.getItem('language');
let language:any;
switch (lg) {
  case 'CN':
  default:
  language = require(`raw-loader!./assets/i18n/language.cn.xlf`);
    break;
  case 'EN':
  language = require(`raw-loader!./assets/i18n/language.en.xlf`);
    break;
}
platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: TRANSLATIONS, useValue:language },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
});