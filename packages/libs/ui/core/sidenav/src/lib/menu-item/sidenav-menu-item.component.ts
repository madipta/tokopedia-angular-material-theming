import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Subject, takeUntil } from 'rxjs';
import { SideNavService } from '../sidenav.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ui-sidenav-menu-item',
  standalone: true,
  styleUrls: ['sidenav-menu-item.component.scss'],
  template: `
    <div class="item" (click)="itemClick()">
      <span class="wrapper" [ngClass]="{ active }">
        <fa-icon [icon]="icon" *ngIf="icon"></fa-icon>
        <span class="item-caption">{{ caption }}</span>
      </span>
    </div>
  `,
})
export class SideNavMenuItemComponent implements OnDestroy, OnInit {
  @HostBinding('class.sidenav-menu-item') base = true;
  @HostBinding('class.active') active = false;
  @HostBinding('class.minimize') minimize = false;
  @Input() caption = '';
  @Input() icon?: IconProp;
  @Input() link: string | undefined;
  destroy$ = new Subject<void>();

  itemClick() {
    this.router.navigate([this.link]);
  }

  constructor(private router: Router, private service: SideNavService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.active = event.url === '/' + this.link;
      }
    });
    this.service.minimize$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.minimize = res;
    });
  }
}
