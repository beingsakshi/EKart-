import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address/address';

@Injectable({
  providedIn: 'root'
})
export class AddressUpdateService {

  url = "http://localhost:9100/address/1/";
  aid:number = 31;
  

  constructor(private http:HttpClient,private router:Router) { }

  updateUser(user: Address){
    const headers = new HttpHeaders()
      .set('Content-Type','application/json');
     this.http.put(this.url+ this.aid,user).subscribe(res => console.log("Address updated succesfully!!"));
     this.router.navigate(['/addressDetails']);
  }

}
