import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Rx';
import { Getty } from '../_interfaces/getty';


@Injectable()
export class SharedDataService {

  constructor() { }

  private messageSource = new ReplaySubject<Getty>(1);

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
