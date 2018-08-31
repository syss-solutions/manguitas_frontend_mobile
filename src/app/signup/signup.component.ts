import { Component, ViewChild, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { MenuService } from '../core/services';

@Component({
  selector: 'ons-page[signup]',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
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
