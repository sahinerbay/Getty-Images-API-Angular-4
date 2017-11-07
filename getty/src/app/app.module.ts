// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CustomModule } from './custom.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { ModalComponent } from './header/modal/modal.component';
import { CustomModuleComponents } from './custom.module';

// SERVICE
import { HttpService } from './_services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SearchComponent,
    ModalComponent,
    CustomModuleComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
