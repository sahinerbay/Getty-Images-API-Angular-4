import { Component, OnInit } from '@angular/core';

/* Interface */
import { FilterOptions } from '../../_interfaces/filterOptions';

/* Service */
import { SettingsService } from './../../_services/settings.service';
import { HttpService } from './../../_services/http.service';
import { GetRouteService } from './../../_services/get-route.service';

@Component({
  selector: 'gt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private httpService: HttpService, private settingsService: SettingsService, private routeService: GetRouteService) { }

  // Static data that is coming from settingsService 
  private filterList: FilterOptions;

  //Selected option value 
  private mediaType: string;

  //Entered query via input text
  private searchQuery: string;

  ngOnInit() {
    //Fetch filter list from service
    this.filterList = this.settingsService.sortOptions;
    //Assign default value ('images') for filtering list -If nothing is selected then default is image
    this.mediaType = this.filterList[0].value;
  }

  // Media type is used in http.service to create URL in order to request the data from api
  setMediaType(event): void {
    this.mediaType = event.target.value;
  }

  setRoutes(event, media, query) {
    this.routeService.setRoutes(event, media, query);
  }

  sendRequest() {
    this.httpService.getPosts(this.mediaType, this.searchQuery);
    console.log('works')
  }

}

