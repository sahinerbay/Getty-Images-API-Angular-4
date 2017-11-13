import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';
import { Getty } from '../_interfaces/getty';


@Injectable()
export class SharedDataService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>(null);

  createSharedData(message: string) {
    this.messageSource.next(message);
  }

  getSharedData(): Observable<string> {
    return this.messageSource.asObservable();
  }

  clearSharedData() {
    this.messageSource.next('');
  }
}
