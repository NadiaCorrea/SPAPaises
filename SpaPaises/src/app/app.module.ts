import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing'; // importo la ruta y la añado en providers

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
imports: [
  BrowserModule,
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





 
