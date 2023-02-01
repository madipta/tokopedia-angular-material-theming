import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '@root/ui/components/sidenav';

@Component({
  imports: [CommonModule, SideNavComponent],
  selector: 'ui-dashboard',
  standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <header>
      <ng-content select="[header]"></ng-content>
    </header>
    <ui-sidenav><ng-content select="[sidenav]"></ng-content></ui-sidenav>
    <main>
      <section class="main-content">
        <ng-content></ng-content>
      </section>
    </main>
  `,
})
export class DashboardComponent {}
