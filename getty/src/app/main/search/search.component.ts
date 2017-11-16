import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Selected active radio button's value
  private mediaType: string;;
  private requestedSearchQuery: string;

  private filterOptions: Array<any> = [
    {
      name: 'images all',
      value: 'images'
    },
    {
      name: '-creative images',
      value: 'images/creative'
    },
    {
      name: '-editorial images',
      value: 'images/editorial'
    },
    {
      name: 'videos all',
      value: 'videos'
    },
    {
      name: '-creative videos',
      value: 'videos%2Fcreative'
    },
    {
      name: '-editorial videos',
      value: 'videos/editorial'
    },
    {
      name: 'events',
      value: 'events'
    }
  ];

  setMediaType(event):void {
    this.mediaType = event.target.value;
  }

  

}

