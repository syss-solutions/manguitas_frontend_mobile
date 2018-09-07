import { Component, ViewChild, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { onsNotification } from 'ngx-onsenui';

import { MenuService } from '../core/services';
import { ForgotComponent } from '../forgot/forgot.component';

@Component({
  selector: 'ons-page[login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();

  /**
   * Constructor
   */
  constructor(private navi: OnsNavigator, private menuService: MenuService) { }

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
  
    if(!this.isEmail(username)) {
      onsNotification.alert('Incorrect e-mail format');
    } else {
      // TODO Llamada a servicio y matcheo

      if (username === 'bob' && password === 'secret') {
        onsNotification.alert('Congratulations!');
      } else {
        onsNotification.alert('Incorrect username or password.');
        // onsNotification.toast('Incorrect username or password.', {timeout: 2000});
      }
    }
  }

  /**
   * 20180903 - Forgot Password Page Navigation.
   */
  forgot() {
    this.navi.nativeElement.pushPage(ForgotComponent);
  }

  /**
   * 20180903 - E-Mail Format Validation.
   */
  isEmail(search:string):boolean {
    var  serchfind:boolean;

    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    serchfind = regexp.test(search);

    console.log(serchfind)
    return serchfind
  }

  /*
  getLogin(query) {
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98';
    return this.http
        .get(endpoint)//, {search: searchParams})
        .map(res => res.json().main)
        .subscribe(res => {this.weather = data;
        });
  }
  */
}
