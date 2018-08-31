import { Component, NgZone, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { MenuService } from '../../core/services';
import { DetailsComponent } from '../../details/details.component';

@Component({
  selector: 'ons-page[content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class CollectionsContentComponent implements OnInit {
  
  /**
   * Constructor
   */
  constructor(private navi: OnsNavigator, private menuService: MenuService){ }

  /**
   * Initialize
   */
  ngOnInit() {
  }

  /**
   * Open menu
   */
  openMenu() {
    this.menuService.open();
  }

  /**
   * Push page
   */
  push() {
    this.navi.nativeElement.pushPage(DetailsComponent);
  }

}
