import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gt-list-item-modal',
  templateUrl: './list-item-modal.component.html',
  styleUrls: ['./list-item-modal.component.scss']
})
export class ListItemModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() itemDetails;

}
