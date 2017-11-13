import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// COMPONENTS
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main.component';

const heroesRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: SearchComponent },
      { path: 'search/:mediaType', component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MainRoutingModule { }
export const MainRoutingComponents = [SearchComponent, ListComponent, MainComponent];
