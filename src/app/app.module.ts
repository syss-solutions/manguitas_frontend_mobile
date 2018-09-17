import { BrowserModule } from '@angular/platform-browser';

// 20180917 - i18n. By default, Angular only contains locale data for en-US.
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { OnsenModule } from 'ngx-onsenui';
// 20180912 - Http Client module.
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionsContentComponent } from './collections/content/content.component';
import { CollectionsSideComponent } from './collections/side/side.component';
import { DetailsComponent } from './details/details.component';
import { PreferencesComponent } from './preferences/preferences.component';

// 20180917 - i18n. By default, Angular only contains locale data for en-US.
// angular.json file modify to add i18n locale configurations
// ng serve --aot --configuration=es
registerLocaleData(localeEs, 'es');

/**
 * Page components
 */
const pages = [
  LoginComponent,
  ForgotComponent,
  SignupComponent,
  CollectionsComponent,
  CollectionsContentComponent,
  CollectionsSideComponent,
  DetailsComponent,
  PreferencesComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages
  ],
  entryComponents: [
    ...pages
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    // 20180912 - Http Client module
    HttpClientModule,
    CoreModule.forRoot()
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
