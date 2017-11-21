import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'gt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

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
