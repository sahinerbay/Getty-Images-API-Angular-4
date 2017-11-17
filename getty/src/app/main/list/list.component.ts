import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

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
  providers: [GetRouteService]
})
export class ListComponent implements OnInit, DoCheck {

  constructor(private httpService: HttpService, private sharedData: SharedDataService, private routeService: GetRouteService) { }

  private retrievedItems: Array<string>;
  private currentSearchQuery: string;
  private currentMediaType: string;
  private numberOfResults: number;

  ngOnInit() {
    // Fetch media type from route -'mediaType' comes from main-routing.module
    this.routeService.getActiveRoute().subscribe(params => this.currentMediaType = params.get('mediaType'));

    // Fetch search query from route parameter -'query' comes from get-route.service
    this.routeService.getActiveParameter().subscribe(params => this.currentSearchQuery = params.get('query'));

    // In case of typing directly in URL; route and its parameters used to make the request; when any request is made, it will save in share.data.service
    this.httpService.getPosts(this.currentMediaType, this.currentSearchQuery);

    // Fetch response from 'shared-data.service'
    this.getResponse(this.currentMediaType);
  }

  // When the value of select options changed
  ngDoCheck() {
    //this.getResponse(this.currentMediaType)
  }

  getResponse(mediaType: string) {
    let reg = '(image|event)';
    let regExp = new RegExp(reg, "g");
    if (regExp.test(mediaType)) {
      this.currentMediaType = 'images';
    } else this.currentMediaType = 'videos';

    this.sharedData.getSharedData().subscribe(
      (result: Getty) => {
        this.retrievedItems = result[mediaType];
        this.numberOfResults = result['result_count'];
      },
      //Error
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      },

      //completed
      () => console.log('completed')
    );
  }

}
