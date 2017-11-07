import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

//components
import { ListComponent } from './main/list/list.component';

const appRoutes: Routes = [
  { path: 'type', component: ListComponent }, //remember path cannot start with a slash!
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class CustomModule { }
export const CustomModuleComponents = [ListComponent];
