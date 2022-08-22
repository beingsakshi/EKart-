import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddressDetailsComponent } from './address/address-details/address-details.component';
import { AddressHomeComponent } from './address-home/address-home.component';
import { AddressUpdateComponent } from './address-update/address-update.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressHomeComponent,
    AddressComponent,
    AddressDetailsComponent,
    AddressUpdateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddressHomeComponent]
})
export class AppModule { }
