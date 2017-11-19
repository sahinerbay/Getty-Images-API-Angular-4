import { Component, OnInit } from '@angular/core';

/* Interface */
import { SortAndFilterOptions } from '../../_interfaces/sortAndFilterOptions';

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
  private filterMediaTypeOptions: SortAndFilterOptions;

  //Selected option value 
  private mediaType: string;

  //Entered query via input text
  private searchQuery: string;

  ngOnInit() {
    // Creates filter select bar by media type
    this.filterMediaTypeOptions = this.settingsService.filterMediaTypeOptions;
    //Assign default value ('images') for filtering list -If nothing is selected then default is image
    this.mediaType = this.filterMediaTypeOptions[0].value;
  }

  // Media type is used in http.service to create URL in order to request the data from api
  setMediaType(event): void {
    this.mediaType = event.target.value;
  }

  sendRequest(event, mediaType, searchQuery) {
    if (event.target.nodeName === 'SPAN' ||
      event.target.nodeName === 'BUTTON' ||
      event.keyCode === 13) {
      this.routeService.setRoutes(mediaType, searchQuery);
      this.httpService.getPosts(mediaType, searchQuery);
    }
  }
}