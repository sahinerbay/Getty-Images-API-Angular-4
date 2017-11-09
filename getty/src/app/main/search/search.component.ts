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

  private selectedRadioButton: string="Images";
  
  setRadioButton(event):void {
    this.selectedRadioButton = event.target.value;
  }

  getRequest(searchBar):void {
    let searchQuery:string = searchBar.value;
    this.httpService.getPosts(this.selectedRadioButton, searchQuery);
    console.log(searchQuery, this.selectedRadioButton)
  }

}
