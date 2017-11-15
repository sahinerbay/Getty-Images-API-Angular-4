// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule }   from '@angular/forms';

// COMPONENTS
import { MainRoutingComponents } from './main-routing.module';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListItemModalComponent } from './list/list-item/list-item-modal/list-item-modal.component';
import { ListFilterComponent } from './list/list-filter/list-filter.component';

import { RemoveDashPipe } from './../_pipes/remove-dash.pipe';

import { SetSearchIconDirective } from './../_directives/set-search-icon.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [
    MainRoutingComponents,
    ListItemComponent,
    ListItemModalComponent,
    ListFilterComponent,
    RemoveDashPipe,
    SetSearchIconDirective
  ],
  providers: [RemoveDashPipe],
})
export class MainModule { }
