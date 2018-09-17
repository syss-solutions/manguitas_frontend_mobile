import { Component, Injectable, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { OnsNavigator, onsNotification } from 'ngx-onsenui';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MenuService } from '../core/services';
import { ForgotComponent } from '../forgot/forgot.component';
import { SignupComponent } from '../signup/signup.component';

import { Auth } from '../../model/auth';
import { Observable } from 'rxjs';
import { CollectionsComponent } from '../collections/collections.component';

@Component({
  selector: 'ons-page[login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable()
export class LoginComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();

  /**
   * Constructor
   */
  constructor(private navi: OnsNavigator, private menuService: MenuService, private http: HttpClient) { }

  /**
   * Initialize
   */
  ngOnInit() {
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.onDestroy$.next();
  }

  /**
   * 20180903 - Login Validation.
   */
  login() {
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    
    console.log('Logging in: %d', username);
    if(!this.isEmail(username)) {
      console.error('Incorrect e-mail format');
      onsNotification.alert('Incorrect e-mail format');
    } else {
      (<HTMLProgressElement>document.getElementById('progress')).value=100;
      this.loginService(username, password)
        .subscribe(
          res => {
            if(res.auth) {
              console.info('User logged!: %d', username);
              this.collections(res.token);
            } else {
              (<HTMLProgressElement>document.getElementById('progress')).value=0;
              console.error('Incorrect username or password.');
              onsNotification.alert('Incorrect username or password.');
              // onsNotification.toast('Incorrect username or password.', {timeout: 2000});
            }
          },
          err => {
            (<HTMLProgressElement>document.getElementById('progress')).value=0;
            onsNotification.alert('Incorrect username or password.');
            console.error('Error occured!');
            console.error(err.error);
            console.error(err.name);
            console.error(err.message);
            console.error(err.status);
          }
        );
    }
  }

  /**
   * 20180903 - Forgot Password Page Navigation.
   */
  forgot() {
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    console.info('Forgot Password for User: %d', username);
    const data = {username};
    this.navi.nativeElement.pushPage(ForgotComponent, {data});
  }

  /**
   * 20180917 - Sign Up Page Navigation.
   */
  signup() {
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    console.info('Sign Up: %d', username);
    const data = {username};
    this.navi.nativeElement.pushPage(SignupComponent, {data});
  }

  /**
   * 20180914 - Collections Page Navigation.
   */
  collections(token) {
    console.info('Showing User Collections...');
    const data = {token};
    this.navi.nativeElement.pushPage(CollectionsComponent, {data});
  }

  /**
   * 20180903 - E-Mail Format Validation.
   */
  isEmail(search:string):boolean {
    var serchfind:boolean;

    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    serchfind = regexp.test(search);
    return serchfind;
  }

  /**
   * 20180912 - Login Web Service Calling.
   */
  loginService(email:string, password:string): Observable<Auth> {
    var body:string;
    body = JSON.stringify({email: email, password: password});

    const httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        })
    };
    return this.http.post<Auth>('http://127.0.0.1:3000/api/auth/login', body, httpOptions);
  }
}
