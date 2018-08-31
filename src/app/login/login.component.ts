import { Component, ViewChild, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { MenuService } from '../core/services';

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

}
