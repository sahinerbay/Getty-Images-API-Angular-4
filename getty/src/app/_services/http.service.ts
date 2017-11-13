import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { SharedDataService } from './shared-data.service';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient, private sharedData: SharedDataService) { }

  createUrl(mediaType, searchQuery): string {
    return `https://api.gettyimages.com/v3/search/${mediaType}/creative?`;
  }

  _data: Observable<any>;
  _type: string;

  //handle later if searchquery null, empty?
  getPosts(mediaType, searchQuery) {

    let url = this.createUrl(mediaType, searchQuery);

    this._type = mediaType;

    this.httpClient
      .get(url, {
        headers: new HttpHeaders().set('Api-Key', '6px2cw4fyyry8y68dvx3hcar'),
        params: new HttpParams().set('phrase', searchQuery).set('fields', 'detail_set')
      }).subscribe(res => {console.log(res); this.sharedData.createSharedData(res[this._type])})
  };
}
