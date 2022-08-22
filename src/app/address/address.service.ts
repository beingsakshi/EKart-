import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { Address } from './address';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AddressService {

   url = "http://localhost:9100/address";
  submitted!: boolean;

  constructor(private router:Router,private http:HttpClient){}
  

  onSubmit(user: Address){

    
    const headers = new HttpHeaders()
      .set('Content-Type','application/json');
      this.http.post(this.url,user).subscribe(res => console.log("Address added succesfully!!"));

      this.submitted=true;
      this.router.navigate(['/addressDetails'])

  }
  
}
