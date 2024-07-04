import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivd]'
})
export class DirectivdDirective {

  constructor(ele: ElementRef) { 
    ele.nativeElement.style.color='red';
  }

}
