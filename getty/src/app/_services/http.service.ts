import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { SharedDataService } from './shared-data.service';
import { Getty } from '../_interfaces/getty';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient, private sharedData: SharedDataService) { }

  //handle later if searchquery null, empty?
  getPosts(mediaType, searchQuery, order = "best_match") {
    let url = `https://api.gettyimages.com/v3/search/${mediaType}?`;

    this.httpClient
      .get(url, {
        headers: new HttpHeaders().set('Api-Key', '6px2cw4fyyry8y68dvx3hcar'),
        params: new HttpParams().set('phrase', searchQuery).set('fields', 'detail_set').set('sort_order', order).set('orientations', 'Horizontal')
      })
      .subscribe((result: Getty) => {
        this.sharedData.createSharedData(result);
        console.log(result)
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
      () => console.log('completed'))
  };
}
