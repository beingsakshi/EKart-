import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Address } from '../address';

@Injectable({
  providedIn: 'root'
})
export class AddressDetailsService {

  addressUrl = 'http://localhost:9100/address/1/';
  aid:number = 32;

  constructor(private http:HttpClient) { }

  viewAddress(): Observable<Address[]>{
    return this.http.get<Address[]>(this.addressUrl).pipe(tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
  }

  // updateUser(address: Address): Observable<Address> {
  //   return this.http.patch<Address>(`${this.addressUrl}/${address.userId}/${address.aid}`, address).pipe(tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
  // }

  deleteUser(id:any): Observable<Address[]>{

    const headers = new HttpHeaders()
    .set('Content-Type','application/json');
     return this.http.delete(this.addressUrl+id).pipe(tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
  }
}
