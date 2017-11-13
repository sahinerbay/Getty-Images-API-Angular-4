import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gt-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  private isModalActive: boolean = false;
  private isHovered: boolean = false;

  ngOnInit() {
  }

  @Input() singleItemDetails;

}
