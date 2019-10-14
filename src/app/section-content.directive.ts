import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[section-content]'
})
export class SectionContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
    
  }

}
