import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CustService} from './custservice.service';
import {OrderService} from './order.service';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {Orders} from '../orders.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import * as firebase from 'firebase';
import {Customer} from '../customer.model';
import {AuthService} from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private dbCustPath = '/customers';
  private dbOrdPath = '/orders';

  customersRef: AngularFireList<Customer> = null;
  ordersRef: AngularFireList<Orders> = null;

  constructor(private custService: CustService, private orderService: OrderService, private http: HttpClient,
              private authService: AuthService, private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbCustPath);
    this.ordersRef = db.list(this.dbOrdPath);
    console.log('constructor reached');
  }

  storeCustomers(customers: any) {
     this.http.post('https://sampleproject-c0ccb.firebaseio.com/customers.json' , customers).subscribe(response => {
      console.log(response);
    });
  }
  /*storeOrders() {
    const orders  = this.orderService.getOrders();
    this.http.put('https://sampleproject-c0ccb.firebaseio.com/orders.json' , orders).subscribe(response => {
      console.log(response);
    });
  }*/

  fetchCustomers() {
        /*return this.http.get<Customer[]>(
          'https://sampleproject-c0ccb.firebaseio.com/customers.json');
        */
        this.getCustomersList();
      }

  fetchOrders() {
        return this.http.get<Orders[]>(
          'https://sampleproject-c0ccb.firebaseio.com/orders.json');
      }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }

  deleteCustomer(key: string) {
   // To Delete ALl Customers
    /* const itemRef = this.db.object('customers');
    itemRef.remove();
    console.log('delete attempted1'); */
    /*let dbb = firebase.database();
    let userRef = dbb.ref('customers/' + key);
    userRef.remove();*/

    return this.customersRef.remove(key);
    console.log('delete attempted2');
  }

  deleteOrder(key: string) {
    return this.ordersRef.remove(key);
  }

  getCustomersList(): AngularFireList<Customer> {
    return this.customersRef;
  }

  getOrdersList(): AngularFireList<Orders> {
    return this.ordersRef;
  }

  deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }
}

