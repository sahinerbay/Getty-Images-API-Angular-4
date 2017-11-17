import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Rx';
import { Getty } from '../_interfaces/getty';


@Injectable()
export class SharedDataService {

  constructor() { }

  private messageSource = new ReplaySubject<Getty>(1);
  private sortOptions = new ReplaySubject<string>(1);
  private filterOptions = new ReplaySubject<Getty>(1);

  setSortOptions (option:string) {
    this.sortOptions.next(option);
  }

  getSortOptions(): Observable<string> {
    return this.sortOptions.asObservable();
  }


  createSharedData(message: Getty) {
    this.messageSource.next(message);
  }

  getSharedData(): Observable<Getty> {
    return this.messageSource.asObservable();
  }

  clearSharedData() {
    this.messageSource.next(null);
  }
}
