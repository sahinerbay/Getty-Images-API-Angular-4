import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'gt-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnChanges  {

  constructor() { }

  private isModalActive: boolean = false;
  private isHovered: boolean = false;
  private thumbnailSource: string;

  ngOnInit() {
    this.thumbnailSource = this.setThumbnailSize(this.singleItemDetails, this.isPreviewDetailsOnChild);
  }

  ngOnChanges() {
    this.thumbnailSource = this.setThumbnailSize(this.singleItemDetails, this.isPreviewDetailsOnChild);
  }

  @Input() singleItemDetails;
  @Input() private isPreviewDetailsOnChild: boolean;

  setThumbnailSize(singleItemDetails, isPreviewDetailsOnChild: boolean) {
    if (isPreviewDetailsOnChild === false) {
      return this.singleItemDetails.display_sizes[1].uri;
    } else return this.singleItemDetails.display_sizes[2].uri;
  }

  setHoversIn() {
    this.isHovered = true;
  }

  setHoversOut() {
    this.isHovered = false;
  }

  setModalActive() {
    this.isModalActive = true;
  }

  setModalInactive(condition: boolean) {
    this.isModalActive = condition;
  }

}
