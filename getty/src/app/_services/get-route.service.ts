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

  setRoutes(mediaType, searchQuery, sortOrder = 'best_match') {
    this.router.navigate(['/search', mediaType], { queryParams: { query: searchQuery, sort_order: sortOrder } })
  }

}
