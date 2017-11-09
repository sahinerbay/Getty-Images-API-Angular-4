import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gt-list-item',
  templateUrl: './list-item.component.html',
  styles: [`
  div.polaroid {
    width: 80%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {width: 100%;
  height: 200px;}

div.container {
    text-align: center;
    padding: 10px 20px;
}
`]
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() itemArray;

}
