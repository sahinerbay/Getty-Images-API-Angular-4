import { Component, OnInit, DoCheck } from '@angular/core';

/* Interface */
import { Getty } from '../../_interfaces/getty';

/* Services */
import { HttpService } from '../../_services/http.service';
import { SharedDataService } from '../../_services/shared-data.service';
import { GetRouteService } from '../../_services/get-route.service';
import { HelpersService } from './../../_services/helpers.service';


@Component({
  selector: 'gt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [GetRouteService, HelpersService]
})
export class ListComponent implements OnInit, DoCheck {

  constructor(private httpService: HttpService, private sharedData: SharedDataService, private routeService: GetRouteService, private helperService: HelpersService) { }

  private retrievedItems: Array<string>;

  // This will be used in child component -list-filter.component
  private numberOfResults: string;


  private currentSearchQuery: string;
  private currentMediaType: string;
  

  ngOnInit() {
    // Fetch media type from route -'mediaType' comes from main-routing.module
    this.routeService.getActiveRoute().subscribe(params => {
      this.currentMediaType = this.helperService.setMediaTypeOption(this.currentMediaType, params.get('mediaType'));
    });

    // Fetch search query from route parameter -'query' comes from get-route.service
    this.routeService.getActiveParameter().subscribe(params => {this.currentSearchQuery = params.get('query')});

    // if (this.sharedData.getSharedData().isEmpty) {
    //   console.log('empty')
    //   // In case of typing directly in URL; route and its parameters used to make the request; when any request is made, it will save in share.data.service
    //   this.httpService.getPosts(this.currentMediaType, this.currentSearchQuery);
    // }

    // Fetch response from 'shared-data.service'
    this.sharedData.getSharedData().subscribe(
      (result: Getty) => {
        this.retrievedItems = result[this.currentMediaType]; // images or videos
        this.numberOfResults = result.result_count;
      }
    );

  }

  // When the value of select options changed
  ngDoCheck() {

  }

}
