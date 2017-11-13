// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule }   from '@angular/forms';

// COMPONENTS
import { MainRoutingComponents } from './main-routing.module';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListItemModalComponent } from './list/list-item/list-item-modal/list-item-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [
    MainRoutingComponents,
    ListItemComponent,
    ListItemModalComponent
  ]
})
export class MainModule { }
