import { Component, OnInit, ViewEncapsulation, DoCheck, Input } from '@angular/core';

import { FilterOptions } from './../../../_interfaces/filterOptions';

import { HttpService } from '../../../_services/http.service';
import { GetRouteService } from '../../../_services/get-route.service';
import { SettingsService } from './../../../_services/settings.service';
import { SharedDataService } from './../../../_services/shared-data.service';

@Component({
  selector: 'gt-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss'],
  providers: [GetRouteService],
  encapsulation: ViewEncapsulation.Native
})
export class ListFilterComponent implements OnInit, DoCheck {

  constructor(private httpService: HttpService, private routeService: GetRouteService, private settingService: SettingsService, private dataService: SharedDataService) { }

  @Input() private currentRoute: string;
  @Input() private currentParameter: string;
  @Input() private numberOfResults: number;

  private sortOptions: FilterOptions;
  private currentSort: string;
  private filterOptions: FilterOptions;

  ngOnInit() {
   this.sortOptions = this.settingService.sortOptions;
   this.filterOptions = this.settingService.filterOptions;
   this.setSelectedSorting();
  }

  ngDoCheck() {
  }

  //Selected option media type -If nothing is selected then default is image
  private mediaType: string;
  //Entered query via input text
  private searchQuery: string;

  setMediaType(event): void {
    this.mediaType = event.target.value;
    this.dataService.setSortOptions(this.mediaType);
  }

  setRoutes(event, mediaType, searchQuery) {
    this.routeService.setRoutes(event, mediaType, searchQuery)
  }

  setSelectedSorting() {
    this.routeService.getActiveRoute().subscribe(params => this.currentSort = params.get('mediaType'));
  }

  sendRequest(event): void {
    this.httpService.getPosts(this.currentParameter, this.currentRoute, event.target.value);
  }
}
