import { Component, OnInit, DoCheck } from '@angular/core';
import { GetRouteService } from '../_services/get-route.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'gt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private routeService: GetRouteService, private router: Router) { }

  /* Hide navbar on homepage and Show navbar again on other pages */
  private isNavbarVisible: boolean = false;

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (event.url === '/') {
            this.isNavbarVisible = false;
          } else this.isNavbarVisible = true;
        }
      });
  }
}
