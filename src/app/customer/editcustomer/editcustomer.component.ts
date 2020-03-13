import {Component, Input, OnInit} from '@angular/core';
// import {User} from '../signup/signup.component';
import {CustService} from '../../services/custservice.service';
import {Customer} from '../../customer.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  cust: Customer;
  updateForm: FormGroup;
  user = {} as Customer;

/*
const config = {
    apiKey: 'AIzaSyB1ST79-vsmh5VabQGQ7H58SjctBska0Fk',
    authDomain: '<sampleproject-c0ccb>.firebaseapp.com',
    projectId: '<sampleproject-c0ccb>',
    databaseURL: 'https://<sampleproject-c0ccb>.firebaseio.com',
  };
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
this.database = firebase.database();

*/


constructor(private fb: FormBuilder, private router: Router, private customerService: CustService) {
    this.updateForm = this.fb.group({
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
    this.cust = this.customerService.SelectedCustomer;
    console.log('this is the required customer');
    console.log(this.cust);
  }
update() {
      console.log(this.updateForm.value);
      this.user.fname = this.updateForm.controls.fname.value;
      this.user.lname = this.updateForm.controls.lname.value;
      this.user.email =  this.updateForm.controls.email.value;
      this.user.address =  this.updateForm.controls.address.value;
      this.user.city =  this.updateForm.controls.city.value;
      this.user.state =  this.updateForm.controls.state.value;
      this.user.phoneNumber = this.updateForm.controls.phoneNumber.value;
      console.log(this.user.fname);
      this.customerService.updateCustomer(this.user.email, this.updateForm.value);
      localStorage.setItem('userData', JSON.stringify(this.user));
      this.updateForm.reset();
      this.router.navigate(['../']);
  }

}
