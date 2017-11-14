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

  private isActive:boolean = true;

  setClass():void {
    this.isActive = !this.isActive;
  }
  // $('#toggle').click(function() {
  //   $(this).toggleClass('active');
  //   $('#overlay').toggleClass('open');
  //  });


}
