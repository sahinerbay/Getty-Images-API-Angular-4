import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../_services/http.service';

@Component({
  selector: 'gt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private httpService : HttpService) { }

  ngOnInit() {
  }

  private selectedRadioButton: string= "images";
  
  setRadioButton(event):void {
    this.selectedRadioButton = event.target.value;
  }

  //handle later if searchquery null, empty?
  getRequest(searchBar):void {
    let searchQuery:string = searchBar.value;
    this.httpService.getPosts(this.selectedRadioButton, searchQuery);
  }

}
