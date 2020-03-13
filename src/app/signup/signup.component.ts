import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {Router} from '@angular/router';
import {CustService} from '../services/custservice.service';
import {Customer} from '../customer.model';
import {DataStorageService} from '../services/data-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user = {} as Customer;
 // users: Customer[];
  constructor(private fb: FormBuilder, private router: Router, private custService: CustService,
              private dataStorageService: DataStorageService) {
     this.signupForm = this.fb.group({
       fname: ['', Validators.required],
       lname: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       address: ['', Validators.required],
       city: ['', Validators.required],
       state: ['', Validators.required],
       phoneNumber: ['', [Validators.required, Validators.minLength(10)]]
     });
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    if (this.signupForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.signupForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getfNameErrorMessage() {
    return this.signupForm.get('fname').hasError('required') ? 'You must enter a value' : '';
  }
  getlNameErrorMessage() {
    return this.signupForm.get('lname').hasError('required') ? 'You must enter a value' : '';
  }
  getCityErrorMessage() {
    return this.signupForm.get('city').hasError('required') ? 'You must enter a value' : '';
  }
  getAddressErrorMessage() {
    return this.signupForm.get('address').hasError('required') ? 'You must enter a value' : '';
  }
  getStateErrorMessage() {
    return this.signupForm.get('state').hasError('required') ? 'You must enter a value' : '';
  }
  getPhoneNumberErrorMessage() {
    return this.signupForm.get('phoneNumber').hasError('required') ? 'You must enter a value' : '';
  }
  signUp() {
    console.log(this.signupForm.value);
    this.user.fname = this.signupForm.controls.fname.value;
    this.user.lname = this.signupForm.controls.lname.value;
    this.user.email =  this.signupForm.controls.email.value;
    this.user.address =  this.signupForm.controls.address.value;
    this.user.city =  this.signupForm.controls.city.value;
    this.user.state =  this.signupForm.controls.state.value;
    this.user.phoneNumber = this.signupForm.controls.phoneNumber.value;
    console.log(this.user.fname);
    localStorage.setItem('userData', JSON.stringify(this.user));
    // this.custService.addCustomer(this.signupForm.value);
    this.dataStorageService.storeCustomers(this.signupForm.value);
    this.signupForm.reset();
    this.router.navigate(['/customer']);
  }
}
