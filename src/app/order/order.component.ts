import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {DataStorageService} from '../data-storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any;
  constructor(private orderService: OrderService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
