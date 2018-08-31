import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionsContentComponent } from './collections/content/content.component';
import { CollectionsSideComponent } from './collections/side/side.component';
import { DetailsComponent } from './details/details.component';

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
  DetailsComponent
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
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
