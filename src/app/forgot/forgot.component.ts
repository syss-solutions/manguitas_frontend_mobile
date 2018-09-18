import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { OnsNavigator, Params, onsNotification } from 'ngx-onsenui';
import { email } from 'emailjs/email';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Passwd } from '../../model/passwd';
import { Observable } from 'rxjs';

@Component({
  selector: 'ons-page[forgot]',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();
  private userInformed: string;

  /**
   * Constructor
   */
  constructor(private navi: OnsNavigator, private params: Params, private http: HttpClient) {
    this.userInformed = params.data.username;
  }

  /**
   * Initialize
   */
  ngOnInit() {
    console.log('Remembering password...');
    (<HTMLInputElement>document.getElementById('forgot_username')).value=this.userInformed;
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.onDestroy$.next();
  }

  /**
   * 20180914 - Send Password Recovery.
   */
  send() {
    var username = (<HTMLInputElement>document.getElementById('username')).value;

    console.log('Recovering password for: %d', username);
    if(!this.isEmail(username)) {
      console.error('Incorrect e-mail format: %d', username);
      onsNotification.alert('Incorrect e-mail format');
    } else {
      (<HTMLProgressElement>document.getElementById('progress')).value=100;

      this.sendEmail(username, '12345678');
      /*
      this.recoverPasswdService(username)
        .subscribe(
          res => {
            if(res.password) {
              console.info('Password recovered for User: %d', username);
              this.sendEmail(username, res.password);
            } else {
              (<HTMLProgressElement>document.getElementById('progress')).value=0;
              console.error('The password cannot be sended: Incorrect username.');
              onsNotification.alert('The password cannot be sended: Incorrect username.');
              // onsNotification.toast('Incorrect username or password.', {timeout: 2000});
            }
          },
          err => {
            (<HTMLProgressElement>document.getElementById('progress')).value=0;
            onsNotification.alert('The password cannot be sended: Incorrect username.');
            console.error('Error occured!');
            console.error(err.error);
            console.error(err.name);
            console.error(err.message);
            console.error(err.status);
          }
        );
        */
      console.info('E-Mail sended to e-mail: %d', username);
      onsNotification.alert('E-Mail sended to: ' + username);
      (<HTMLProgressElement>document.getElementById('progress')).value=0;
    }
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
   * 20180918 - Password Recovery Service Calling.
   */
  recoverPasswdService(email:string): Observable<Passwd> {
    var body:string;
    body = JSON.stringify({email: email});

    const httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        })
    };
    // TODO Get the user's password.
    return this.http.post<Passwd>('http://127.0.0.1:3000/api/user', body, httpOptions);
  }

  /**
   * 20180918 - e-mail sender method.
   */
  sendEmail(username:string, password:string) {
    var server  = email.server.connect({
      user:     "becaskurtces@gmail.com", 
      password: "t57ycJ07", 
      host:     "smtp.gmail.com", 
      ssl:      true
    });

    // Send the message and get a callback with an error or details of the message that was sent
    server.send({
      text:       "You have signed up", 
      from:       "becaskurtces@gmail.com", 
      to:         username,
      subject:    "Welcome to Manguitas",
      attachment: 
      [
        {data:"<html>Your <b>password</b> is:</br></br></t>"+ password + "</br></br>Regards!</html>", alternative:true}
      ]
    }, function(err, message) { 
      if(err) {
        console.log(err);
        onsNotification.alert('e-mail error: ' + err);
      } else {
        onsNotification.alert('Incorrect e-mail format');
        // res.json({success: true, msg: 'sent'});
      }
    });
  }
}
