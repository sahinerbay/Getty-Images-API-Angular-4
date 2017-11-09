// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

// COMPONENTS
import { MainRoutingComponents } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainRoutingComponents
  ]
})
export class MainModule { }
