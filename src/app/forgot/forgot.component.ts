import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { OnsNavigator, Params, onsNotification } from 'ngx-onsenui';
import { email } from 'emailjs/email';

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
  constructor(private navi: OnsNavigator, private params: Params) {
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
    // TODO Send e-mail
    var username = (<HTMLInputElement>document.getElementById('username')).value;

    console.log('Recovering password for: %d', username);
    if(!this.isEmail(username)) {
      console.error('Incorrect e-mail format: %d', username);
      onsNotification.alert('Incorrect e-mail format');
    } else {
      (<HTMLProgressElement>document.getElementById('progress')).value=100;
      var server  = email.server.connect({
        user:     "becaskurtces@gmail.com", 
        password: "t57ycJ07", 
        host:     "<email server url>", 
        ssl:      true
      });

      // Send the message and get a callback with an error or details of the message that was sent
      server.send({
        text:       "You have signed up", 
        from:       "becaskurtces@gmail.com", 
        to:         username,
        subject:    "Welcome to my app",
        attachment: 
        [
          {data:"<html>i <i>hope</i> this works!</html>", alternative:true}
        ]
      }, function(err, message) { 
        if(err) {
          console.log(err);
        } else {
          onsNotification.alert('Incorrect e-mail format');
          //res.json({success: true, msg: 'sent'});
        }
      });
      
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
}
