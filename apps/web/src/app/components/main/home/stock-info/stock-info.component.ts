import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-stock-info',
  template: `
    <tp-stock-info-empty></tp-stock-info-empty>
    <tp-stock-info-adv></tp-stock-info-adv>
  `,
  encapsulation: ViewEncapsulation.None
})
export class StockInfoComponent {}
