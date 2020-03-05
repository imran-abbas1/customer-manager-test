import {Component, Input, OnInit} from '@angular/core';
// import {User} from '../signup/signup.component';
import {CustService} from '../custservice.service';
import {OrderService} from '../order.service';
import {Orders} from '../orders.model';
import {DataStorageService} from '../data-storage.service';

@Component({
  selector: 'app-customerorders',
  templateUrl: './customerorders.component.html',
  styleUrls: ['./customerorders.component.css']
})
export class CustomerordersComponent implements OnInit {
  cust: any;
  custOrder: any;
  private orders: Orders[] = [];
  constructor(private customerService: CustService,
              private orderService: OrderService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    console.log(this.orders);
    this.cust = this.customerService.SelectedCustomer;
    /*console.log(this.cust.email);*/
    this.custOrder = this.orderService.getOrder(this.cust.email);
    /*
    this.cust = this.customerService.SelectedCustomer;
    /!*console.log(this.cust.email);*!/
    this.custOrder = this.orderService.getOrder(this.cust.email);*/
    // console.log(this.custOrder.product[0].productName);
    /*console.log(this.custOrder);
    console.log(this.custOrder.product.length);
  */
  }

}
