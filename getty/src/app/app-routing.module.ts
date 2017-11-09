import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

//components
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent }, //remember path cannot start with a slash!
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
export const AppRoutingModuleComponents = [];

