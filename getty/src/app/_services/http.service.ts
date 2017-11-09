import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  createUrl(mediaType, searchQuery): string {
    return `https://api.gettyimages.com/v3/search/${mediaType}?`;
  }

  _data: Observable<any>;
  _type: string;

  //handle later if searchquery null, empty?
  getPosts(mediaType, searchQuery) {

    let url = this.createUrl(mediaType, searchQuery);

    this._type = mediaType;

    this._data = this.httpClient
      .get(url, {
        headers: new HttpHeaders().set('Api-Key', '6px2cw4fyyry8y68dvx3hcar'),
        params: new HttpParams().set('phrase', searchQuery).set('fields', 'detail_set')
      })

  };



}
