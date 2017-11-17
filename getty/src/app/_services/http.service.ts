import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { SharedDataService } from './shared-data.service';
import { Getty } from '../_interfaces/getty';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient, private sharedData: SharedDataService) { }

  createUrl(mediaType, searchQuery): string {
    return `https://api.gettyimages.com/v3/search/${mediaType}?`;
  }

  //handle later if searchquery null, empty?
  getPosts(mediaType, searchQuery, order = "best_match") {
    let url = this.createUrl(mediaType, searchQuery);

    this.httpClient
      .get(url, {
        headers: new HttpHeaders().set('Api-Key', '6px2cw4fyyry8y68dvx3hcar'),
        params: new HttpParams().set('phrase', searchQuery).set('fields', 'detail_set').set('sort_order', order).set('orientations', 'Horizontal')
      }).subscribe((result:Getty) => {
        this.sharedData.createSharedData(result);
        console.log(result)
      })
  };
}
