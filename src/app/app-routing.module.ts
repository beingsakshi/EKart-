import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressHomeComponent } from './address-home/address-home.component';
import { AddressUpdateComponent } from './address-update/address-update.component';
import { AddressDetailsComponent } from './address/address-details/address-details.component';
import { AddressComponent } from './address/address.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'addressHome',component: AddressHomeComponent},
  {path: 'address', component: AddressComponent},
  {path: 'addressDetails', component:AddressDetailsComponent},
  {path: 'addressUpdate', component:AddressUpdateComponent},
  {path: '**',redirectTo: 'addressHome',pathMatch:"full"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
