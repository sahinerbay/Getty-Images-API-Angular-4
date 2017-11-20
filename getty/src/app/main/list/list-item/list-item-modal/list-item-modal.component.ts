import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() isModalActiveChild = new EventEmitter<boolean>();

  setModalInactive(event) {
    if (event.target.className === 'modal__content__close' || event.target.className === 'modal') {
      this.isModalActiveChild.emit(false);
    }
  }

}
