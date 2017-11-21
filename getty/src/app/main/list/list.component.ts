import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* Interface */
import { Getty } from '../../_interfaces/getty';

/* Services */
import { HttpService } from '../../_services/http.service';
import { SharedDataService } from '../../_services/shared-data.service';
import { GetRouteService } from '../../_services/get-route.service';

@Component({
  selector: 'gt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [GetRouteService],
  encapsulation: ViewEncapsulation.Native
})
export class ListComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private dataService: SharedDataService,
    private routeService: GetRouteService,
  ) { }

  private retrievedItems: Array<string> = [];
  private newComingResultsArray: Array<string>;

  // This will be used in child component -list-filter.component
  private numberOfResults: string;

  private currentMediaType: string = 'images';
  private currentSearchQuery: string;
  private currentSortOrder: string;

  //view type (grid / thumbnail)
  private isPreviewDetailsOn: boolean;

  ngOnInit() {
    // Fetch search query from route parameter -'query' comes from get-route.service
    this.routeService.getActiveParameter().subscribe(params => {
      this.currentSearchQuery = params.get('query');
      this.currentSortOrder = params.get('sort_order');
    });

    // Fetch response from 'shared-data.service'
    this.dataService.getSharedData().subscribe(
      (result: Getty) => {
        this.newComingResultsArray = result[this.currentMediaType]; // images or videos
        this.retrievedItems = this.newComingResultsArray;
        this.numberOfResults = result.result_count;

      }
    );

    // In case of typing directly in URL; route and its parameters used to make the request; when any request is made, it will save in share.data.service
    if (this.retrievedItems === undefined) {
      this.httpService.getPosts(this.currentMediaType, this.currentSearchQuery, this.currentSortOrder);
    }

    // Retrieves the chosen view type (grid / thumbnail)
    this.dataService.getPreviewDetails().subscribe((condition: boolean) => this.isPreviewDetailsOn = condition)
  }

}
