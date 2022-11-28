import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing'; // importo la ruta y la añado en providers

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaisModule } from './pais/pais.module';

@NgModule({
  declarations: [
    AppComponent
  ],
imports: [
  BrowserModule,
  AppRoutingModule, 
  SharedModule,
  HttpClientModule,
  CommonModule,
  PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





 
