import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../_services/http.service';
import { Getty } from '../../_interfaces/getty';

@Component({
  selector: 'gt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  private retrievedItems;

  ngOnInit() {
    this.loadData(this.httpService._data);
  }

  loadData(returnedObservable) {
    console.log(this.httpService._type)
    returnedObservable.subscribe((res) => {this.retrievedItems = res[this.httpService._type]
      console.log(res)},
      error => console.log(error));
  }



}
