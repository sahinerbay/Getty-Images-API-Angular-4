import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../_services/http.service';

@Component({
  selector: 'gt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  //Selected active radio button's value
  private mediaType: string = "images";

  private requestedSearchQuery: string;

  setRadioButton(event): void {
    this.mediaType = event.target.value;
  }
}
