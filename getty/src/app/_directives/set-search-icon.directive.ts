import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[gtSetSearchIcon]'
})
export class SetSearchIconDirective {

  constructor() { }
  @HostBinding('innerHTML') txt:string = "Search";

  @HostListener('window:resize', ['$event.target']) onResize(event) {
    if (window.innerWidth < 550) {
      this.txt = "&#9906;";
    } else {
      this.txt = "Search";
    }
  }

}
