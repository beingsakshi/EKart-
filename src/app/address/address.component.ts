import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { Address } from './address';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressForm! : FormGroup;
  submitted! : boolean;
 // address! : Address;
  error! : any;

  constructor(private formBuilder: FormBuilder,private service: AddressService,private router:Router,private http:HttpClient) { }

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

 // get formData() { return this.addressForm.controls; };

 

  
//  validateForm() { 

//   for(let i in this.addressForm.controls)
//       this.addressForm.controls[i].markAsTouched();
  
//   }


onSubmit (user: Address):void {
  // console.log(this.addressForm);
  // console.log(user.aid);

  //   console.log("true");
  //   let url = "http://localhost:9100/address";
  //   const headers = new HttpHeaders()
  //     .set('Content-Type','application/json');
  //     this.http.post(url,user).subscribe(res => console.log("Address added succesfully!!"));
  //     this.submitted=true;
  //     this.router.navigate(['/addressDetails'])
  this.service.onSubmit(user);


  
}

}
