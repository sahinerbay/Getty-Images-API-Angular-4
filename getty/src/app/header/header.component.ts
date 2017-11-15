import { Component, OnInit, ViewChild, ElementRef, AfterViewInit   } from '@angular/core';

@Component({
  selector: 'gt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private isHamburgerButtonActive:boolean = true;

  private menuLinksNames: Array<string> = ['Home', 'Images', 'Videos', 'Events'];

  setHamburgerButton():void {
    this.isHamburgerButtonActive = !this.isHamburgerButtonActive;
  }

}
