import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../address/address';
import { AddressService } from '../address/address.service';
import { AddressUpdateService } from './address-update.service';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {
  addressForm! : FormGroup;
  submitted! : boolean;
  address! : Address[];

  constructor(private formBuilder: FormBuilder,private service: AddressUpdateService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      address: ['',[Validators.required,Validators.minLength(10)]],
      city: ['',[Validators.required,Validators.pattern('^[A-Za-z]{6}$')]],
      pincode: ['',[Validators.required,Validators.pattern('^\\d{6}$')]],
      state: ['',Validators.required],
      phone: ['',[Validators.required,Validators.pattern('^\\d{10}$')]]
    }

    )

  }

  onUpdate(user:Address):void{
    this.service.updateUser(user);
  }

}
