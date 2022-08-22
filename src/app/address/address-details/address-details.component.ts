import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Address } from '../address';
import { AddressDetailsService } from './address-details.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  @ViewChild('id') 
  aid!: ElementRef;

  address! : Address[];
  address1! : Address;
  title = 'Add New Address';
  title1 = 'Modify Address';
  userId!: number;
 


  constructor(private service:AddressDetailsService,private router:Router) { }

  ngOnInit(): void {
   this.viewDetails();
   //console.log(this.userId);
        
   }
   viewDetails(){
    return this.service.viewAddress().subscribe({next:add => this.address = add});
  }

  updateUser(aid:HTMLDivElement){
   this.router.navigate(['/addressUpdate']);
  }

  deleteUser(id:HTMLDivElement){
  console.log(this.aid.nativeElement.textContent);
   //console.log(id.textContent);
    this.service.deleteUser(this.aid.nativeElement.textContent).subscribe({next:add => this.address = add});
    console.log("Hey");
    this.viewDetails();
  }

}
