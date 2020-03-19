import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {Orders} from '../orders.model';
import {OrderService} from '../services/order.service';
import {map} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {DataStorageService} from '../services/data-storage.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  orders: Orders[] = [];
  customersId = [];
  orderAmount = [];
  chart = [];

  constructor(private orderService: OrderService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.getOrdersList();
}

  getOrdersList() {
    this.dataStorageService.getOrdersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(allorders => {
      // this.custService.setCustomers(customers);
      this.orders = allorders;
      console.log(this.orders);
      console.log(this.orders.length);
      this.orderService.setOrders(this.orders);
      this.mymethod();
      // console.log(this.custService.getCustomers());
    });
  }
  mymethod() {

    console.log(this.orders.length);
    for (let i = 0; i < this.orders.length; i++) {
      this.orderAmount.push(this.orders[i].amount);
      this.customersId.push(this.orders[i].email);
    }
    console.log(this.orderAmount);
    console.log(this.customersId);
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: this.customersId,
        datasets: [
          {
            data: this.orderAmount,
            borderColor: '#3cba9f',
            backgroundColor: [
              '#3cb371',
              '#0000FF',
              '#9966FF',
              '#4C4CFF',
              '#00FFFF',
              '#f990a7',
              '#aad2ed',
              '#FF00FF',
              'Blue',
              'Red',
              'Blue'
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
