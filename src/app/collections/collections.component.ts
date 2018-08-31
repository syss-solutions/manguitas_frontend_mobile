import { Component, ViewChild, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { MenuService } from '../core/services';
import { CollectionsSideComponent } from './side/side.component';
import { CollectionsContentComponent } from './content/content.component';

@Component({
  selector: 'ons-page[collections]',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();

  side = CollectionsSideComponent;
  content = CollectionsContentComponent;

  @ViewChild('splitter') splitter;

  /**
   * Constructor
   */
  constructor(private menuService: MenuService) { }

  /**
   * Initialize
   */
  ngOnInit() {
    this.menuService.open$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(state => {
        this.splitter.nativeElement.side.open();
      });
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
