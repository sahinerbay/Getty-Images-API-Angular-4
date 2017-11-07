import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  createUrl(type, query): string {
    return `https://api.gettyimages.com/v3/search/${type}?phrase=${query}`;
  }

  getPosts(type, query): Observable<any> {
    let url = this.createUrl(type, query)
    return this.httpClient.get(url, {
      headers: new HttpHeaders().set('Api-Key', '6px2cw4fyyry8y68dvx3hcar'),
    });
  }
}
