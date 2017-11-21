import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from './../_services/http.service';
import { GetRouteService } from './../_services/get-route.service';


@Component({
  selector: 'gt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private httpService: HttpService, private routeService: GetRouteService) { }

  private currentSearchQuery: string;
  private currentMediaType: string;
  private currentSortOrder: string;

  ngOnInit() {

    this.routeService.getActiveRoute().subscribe(params => {
      this.currentMediaType= params.get('mediaType');
    });

    // Fetch search query from route parameter -'query' comes from get-route.service
    this.routeService.getActiveParameter().subscribe(params => {
      this.currentSearchQuery = params.get('query');
      this.currentSortOrder = params.get('sort_order');
    });
  }

  private body = document.body;
  private html = document.documentElement;
  private pageNumber: number = 1;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let height = Math.max( this.body.scrollHeight, this.body.offsetHeight, this.html.clientHeight, this.html.scrollHeight, this.html.offsetHeight );
    let scrolledHeight = Math.max(window.pageYOffset, this.html.scrollTop, this.body.scrollTop, 0);
    let windowHeight = window.innerHeight + 10;
    
    console.log('height:' + height);
    console.log('scrolledHeight:' + scrolledHeight);
    console.log('windowHeight:' + windowHeight);
    
    if(height <= scrolledHeight + windowHeight) {
      this.pageNumber ++;
      this.httpService.getPosts('images', this.currentSearchQuery, this.currentSortOrder, this.pageNumber.toString());
    }
  }

}
