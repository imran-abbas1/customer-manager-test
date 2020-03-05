import { Injectable } from '@angular/core';
// import {User} from './signup/signup.component';
import {Subject} from 'rxjs';
import {Customer} from './customer.model';
import {DataStorageService} from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CustService {
  private customer: Customer[] = [];
  /*private customer: Customer[] = [
    {
      fname: 'Stuart',
      lname: 'Binny',
      email: 's.binny@gmail.com',
      address: 'Karol Bagh',
      city: 'North Delhi',
      state: 'NCT Delhi',
      phoneNumber: 9810228889,
    },
    {
      fname: 'Steve',
      lname: 'Rodger',
      email: 'rodger.steve@gmail.com',
      address: '22nd Street',
      city: 'London',
      state: 'Manchester',
      phoneNumber: 9613929279,
    },
    {
      fname: 'Rajeev',
      lname: 'Kumar',
      email: 'r.kumar@gmail.com',
      address: '12/24, Trilokpur',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      phoneNumber: 9632587410,
    },
    {
      fname: 'Paul',
      lname: 'Dembele',
      email: 'dembele.paul@gmail.com',
      address: 'Vth Avenue',
      city: 'Paris',
      state: 'El Parisee',
      phoneNumber: 8523697410,
    },
    {
      fname: 'Akshay',
      lname: 'Singh',
      email: 'singh.akshay@gmail.com',
      address: '34, Phase-V',
      city: 'Gurugram',
      state: 'Haryana',
      phoneNumber: 7894563210,
    }
  ];*/
  customerChanged = new Subject<Customer[]>();
  selectedCustomer: any;
  index: number;

  constructor() {
  }

  getCustomers() {
    return this.customer.slice();
  }

  getCustomer(email: string) {
    return this.customer.find(o => o.email === email);
  }

  setCustomers(customers: Customer[]) {
    this.customer = customers;
    this.customerChanged.next(this.customer.slice());
  }

  addCustomer(newcustomer: Customer) {
    this.customer.push(newcustomer);
    this.customerChanged.next(this.customer.slice());
  }

  updateCustomer(email: string, newCustomer: Customer) {
    this.index = this.customer.indexOf(this.customer.find(o => o.email === email));
    this.customer[this.index] = newCustomer;
    this.customerChanged.next(this.customer.slice());
   // this.dataStorageService.storeCustomers()
  }

  deleteCustomer(index: number) {
    this.customer.splice(index, 1);
    this.customerChanged.next(this.customer.slice());
  }

  set SelectedCustomer(value) {
    this.selectedCustomer = value;
  }

  get SelectedCustomer() {
    return this.selectedCustomer;
  }

}
