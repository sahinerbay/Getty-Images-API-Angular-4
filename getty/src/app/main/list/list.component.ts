import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../_services/http.service';
import { SharedDataService } from '../../_services/shared-data.service';
import { Getty } from '../../_interfaces/getty';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'gt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private httpService: HttpService, private sharedData: SharedDataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  private retrievedItems;
  private searchQuery: string;
  private mediaType: string;

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(params => this.mediaType = params.get('mediaType'));
      
    this.activatedRoute.queryParamMap
      .subscribe(params => this.searchQuery = params.get('query'));

    this.httpService.getPosts(this.mediaType, this.searchQuery);

    console.log(this.mediaType)

     this.sharedData.getSharedData().subscribe(result => this.retrievedItems = result);
    console.log(this.searchQuery)
  }

  

}
