import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// //components
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  //{ path: 'story', component: StoryComponent }, //remember path cannot start with a slash!
  { path: '',        component: HomeComponent }, //remember path cannot start with a slash!
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {}
export const routingComponents = [HomeComponent];
