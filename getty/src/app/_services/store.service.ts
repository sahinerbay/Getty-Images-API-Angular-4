import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class StoreService {

  private messageSource = new BehaviorSubject<string>("default message");

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getMessage(): Observable<string> {
    return this.messageSource.asObservable();
  }

  clearMessage() {
    this.messageSource.next('');
  }

}
