import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DataStorageService} from './data-storage.service';
import {CustService} from './custservice.service';
import {OrderService} from './order.service';
import {Orders} from '../orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersResolverService implements Resolve<Orders[]> {
  constructor(private dataStorageService: DataStorageService, private orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const orders = this.orderService.getOrders();
    if (orders.length === 0) {
      this.dataStorageService.fetchOrders();
    } else {
      return orders;
    }
  }
}
