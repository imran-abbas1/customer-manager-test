import { Injectable } from '@angular/core';
// import {User} from './signup/signup.component';
import {Subject} from 'rxjs';
import {Orders} from '../orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: Orders[] = [];
    /*{
      email: 's.binny@gmail.com',
      orderId: 100,
      amount: 30000,
      product: [{
        productName: 'Bluetooth Headphone',
        productPrice: 5000
      },
        {
          productName: 'LED TV',
          productPrice: 25000
        }]
    },
    {
      email: 'rodger.steve@gmail.com',
      orderId: 101,
      amount: 97380,
      product: [{
        productName: 'LED TV',
        productPrice: 25000
      }, {
        productName: 'Mac Book',
        productPrice: 72380
      }]
    },
    {
      email: 'dembele.paul@gmail.com',
      orderId: 102,
      amount: 72380,
      product: [{
        productName: 'Mac Book',
        productPrice: 72380
      }]
    },
    {
      email: 'singh.akshay@gmail.com',
      orderId: 103,
      amount: 6895,
      product: [{
        productName: 'Sneaker Shoes',
        productPrice: 6895
      }]
    },
    {
      email: 'r.kumar@gmail.com',
      orderId: 104,
      amount: 11500,
      product: [{
        productName: 'Vacum Cleaner',
        productPrice: 11500
      }]
    }
  ];*/

  constructor() {}
   orderChanged = new Subject<Orders[]>();
   selectedOrder: any;
   noOfOrders: number;
   index: number;

   getOrders() {
     return this.order.slice();
   }

   get countOrders() {
     return this.noOfOrders;
   }

   set countOrders(num) {
     this.noOfOrders = num;
   }

   getOrder(email: string) {
     return this.order.filter(o => o.email === email);
   }

   setOrders(orders: Orders[]) {
     this.order = orders;
     this.orderChanged.next(this.order.slice());
   }

   addorder(neworder: Orders) {
     this.order.push(neworder);
     this.orderChanged.next(this.order.slice());
   }

   updateOrder(email: string, newOrder: Orders) {
     this.index = this.order.indexOf(this.order.find(o => o.email === email));
     this.order[this.index] = newOrder;
     this.orderChanged.next(this.order.slice());
   }

   deleteOrder(index: number) {
     this.order.splice(index, 1);
     this.orderChanged.next(this.order.slice());
   }

   set SelectedOrder(value) {
     this.selectedOrder = value;
   }

   get SelectedOrder() {
     return this.selectedOrder;
   }
}
