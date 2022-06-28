import { Component } from '@angular/core';

@Component({
  selector: 'tp-home',
  template: `
    <section class="main">
      <tp-activities></tp-activities>
      <tp-updates></tp-updates>
      <tp-analytics></tp-analytics>
      <tp-performances></tp-performances>
      <tp-stock-info></tp-stock-info>
    </section>
    <tp-utilities></tp-utilities>
  `,
})
export class HomeComponent {}
