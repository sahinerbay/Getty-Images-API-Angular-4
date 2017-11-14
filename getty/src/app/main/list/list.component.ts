import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../_services/http.service';
import { SharedDataService } from '../../_services/shared-data.service';
import { GetRouteService } from '../../_services/get-route.service';
import { Getty } from '../../_interfaces/getty';

@Component({
  selector: 'gt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [GetRouteService]
})
export class ListComponent implements OnInit {

  constructor(private httpService: HttpService,
    private sharedData: SharedDataService,
    private routeService: GetRouteService) { }

  private retrievedItems: Array<string>;
  private searchQuery: string;
  private mediaType: string;
  private numberOfResults: number;

  ngOnInit() {
    
    this.routeService.getActiveRoute().subscribe(params => this.mediaType = params.get('mediaType'));

    this.routeService.getActiveParameter().subscribe(params => this.searchQuery = params.get('query'));

    this.httpService.getPosts(this.mediaType, this.searchQuery);

    this.sharedData.getSharedData().subscribe((result:Getty) => {
      this.retrievedItems = result[this.mediaType];
      this.numberOfResults = result['result_count'];
    });
  }

}
