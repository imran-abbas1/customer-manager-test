import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CustService} from './custservice.service';
import {OrderService} from './order.service';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {Customer} from './customer.model';
import {Orders} from './orders.model';
import {AuthService} from './auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private custService: CustService, private orderService: OrderService, private http: HttpClient,
              private authService: AuthService) {
  }

  storeCustomers(customers: any) {
     this.http.post('https://sampleproject-c0ccb.firebaseio.com/customers.json' , customers).subscribe(response => {
      console.log(response);
    });
  }
  storeOrders() {
    const orders  = this.orderService.getOrders();
    this.http.put('https://sampleproject-c0ccb.firebaseio.com/orders.json' , orders).subscribe(response => {
      console.log(response);
    });
  }

  fetchCustomers() {
        return this.http.get<Customer[]>(
          'https://sampleproject-c0ccb.firebaseio.com/customers.json');
      }

  fetchOrders() {
    /*return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Orders[]>(
          'https://sampleproject-c0ccb.firebaseio.com/orders.json');
      }),
      map(orders => {
        return orders.map(order => {
          return {
            ...order,
            product: order.product ? order.product : []
          };
        });
      }),
      tap(orders => {
        this.orderService.setOrders(orders);
      })
    );*/
  }

}
