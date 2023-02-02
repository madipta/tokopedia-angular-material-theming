import { Directive, ElementRef, Input } from '@angular/core';

export type StickyPosition = "bottom" | "bottom-right";

@Directive({
  selector: '[uiStickyBar]',
  standalone: true
})
export class StickyBarDirective {
  @Input() uiStickyBar: StickyPosition = 'bottom-right';

  constructor(elRef: ElementRef) {
    const el = elRef.nativeElement as HTMLElement;
    el.classList.add('ui-sticky-bar');
    el.classList.add('sticky-' + this.uiStickyBar);
  }
}
