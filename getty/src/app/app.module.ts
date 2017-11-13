// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// SERVICE
import { HttpService } from './_services/http.service';
import { SharedDataService } from './_services/shared-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainModule,
    AppRoutingModule,
    
  ],
  providers: [HttpService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
