import { Component, OnInit, ViewEncapsulation, DoCheck, Input } from '@angular/core';
import { HttpService } from '../../../_services/http.service';
import { GetRouteService } from '../../../_services/get-route.service';

@Component({
  selector: 'gt-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  providers: [GetRouteService],
  encapsulation: ViewEncapsulation.Native
})
export class ListFilterComponent implements OnInit, DoCheck {

  constructor(private httpService: HttpService, private routeService: GetRouteService) { }

  @Input() private currentRoute: string;
  @Input() private currentParameter: string;
  @Input() private numberOfResults: number;

  ngOnInit() {
  }

  ngDoCheck() {
  }

  private filterOptions: Array<any> = [
    {
      name: 'Best Match',
      value: 'best_match'
    },
    {
      name: 'Most Popular',
      value: 'most_popular'
    },
    {
      name: 'Newest',
      value: 'newest'
    }
  ];

  sendRequest(event): void {
    this.httpService.getPosts(this.currentParameter, this.currentRoute, event.target.value);
  }
}
