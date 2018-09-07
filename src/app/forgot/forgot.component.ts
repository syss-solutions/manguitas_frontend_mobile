import { Component, ViewChild, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { MenuService } from '../core/services';
// import { getMaxListeners } from 'cluster';
// var email   = require('emailjs/email');

@Component({
  selector: 'ons-page[forgot]',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();

  /**
   * Constructor
   */
  constructor(private menuService: MenuService) { }

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
   * 20180903 - Send Password Recovery.
   */
  /*
  send() {
    // TODO Send e-mail
    var username = (<HTMLInputElement>document.getElementById('username')).value;

    var server  = email.server.connect({
      user:     "becaskurtces@gmail.com", 
      password: "t57ycJ07", 
      host:     "<email server url>", 
      ssl:      true
    });

    // send the message and get a callback with an error or details of the message that was sent
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
       if(err)
        console.log(err);
       else
        res.json({success: true, msg: 'sent'});
    });
  }
*/
}
