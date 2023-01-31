import { Component } from '@angular/core';

@Component({
  selector: 'tp-not-implemented',
  styles: [
    `
      :host {
        display: block;
        padding: 16px 32px;
      }

      h2 {
        font-size: 2rem;
      }
    `,
  ],
  template: `
    <h2>Not implemented yet!</h2>
    <p>may never be applied, just to practice the angular material theme</p>
  `,
})
export class NotImplementedComponent {}
