import { Component, OnInit } from '@angular/core';

/* Interface */
import { FilterOptions } from '../../_interfaces/filterOptions';

/* Service */
import { SettingsService } from './../../_services/settings.service';
import { SharedDataService } from './../../_services/shared-data.service';
import { GetRouteService } from './../../_services/get-route.service';

@Component({
  selector: 'gt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private settingsService: SettingsService, private dataService: SharedDataService, private routeService: GetRouteService) { }

  ngOnInit() {
    //Fetch filter list from service
    this.filterList = this.settingsService.sortOptions;
    //Assign default value ('images') for filtering list
    this.mediaType = this.filterList[0].value;

    this.dataService.setSortOptions(this.mediaType);
  }

  private filterList: FilterOptions 

  //Selected option media type -If nothing is selected then default is image
  private mediaType: string;
  //Entered query via input text
  private searchQuery: string;

  setMediaType(event): void {
    this.mediaType = event.target.value;
    this.dataService.setSortOptions(this.mediaType);
  }

  setRoutes(event, media, query) {
    this.routeService.setRoutes(event, media, query);
  }

}

