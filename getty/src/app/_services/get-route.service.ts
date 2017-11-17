import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GetRouteService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  private currentRoute: string;
  private currentParameter: string;

  getActiveRoute(): Observable<ParamMap> {
    return this.activatedRoute.paramMap;
  }

  getActiveParameter(): Observable<ParamMap> {
    return this.activatedRoute.queryParamMap;
  }

  setRoutes(event, mediaType, searchQuery) {
    if ((event.target.nodeName === ('SPAN' || 'BUTTON'))|| event.keyCode === 13) {
      this.router.navigate(['/search', mediaType], { queryParams: { query: searchQuery } })
    }
  }


}
