import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { Pagina4Component } from './components/pagina4/pagina4.component';
import { Pagina5Component } from './components/pagina5/pagina5.component';
import { HeaderComponent } from './components/header/header.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { BackComponent } from './components/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component,
    HeaderComponent,
    Pagina1Component,
    BackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
