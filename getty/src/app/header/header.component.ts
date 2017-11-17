import { Component, OnInit } from '@angular/core';
import { GetRouteService } from '../_services/get-route.service';

@Component({
  selector: 'gt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private routeService: GetRouteService) { }

  ngOnInit() {
  }

  private isLogoIconVisible: boolean= false;
  private isHamburgerButtonActive:boolean = true;
  private menuLinksNames: Array<string> = ['Home', 'Images', 'Videos', 'Events'];

  setHamburgerButton():void {
    this.isHamburgerButtonActive = !this.isHamburgerButtonActive;
  }

}
