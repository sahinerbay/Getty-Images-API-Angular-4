// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

// COMPONENTS
import { MainRoutingComponents } from './main-routing.module';
import { ListItemComponent } from './list/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainRoutingComponents,
    ListItemComponent
  ]
})
export class MainModule { }
