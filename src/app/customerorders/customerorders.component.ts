import {Component, Input, OnInit} from '@angular/core';
// import {User} from '../signup/signup.component';
import {CustService} from '../custservice.service';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-customerorders',
  templateUrl: './customerorders.component.html',
  styleUrls: ['./customerorders.component.css']
})
export class CustomerordersComponent implements OnInit {
  cust: any;
  custOrder: any;
  constructor(private customerService: CustService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.cust = this.customerService.SelectedCustomer;
    /*console.log(this.cust.email);*/
    this.custOrder = this.orderService.getOrder(this.cust.email);
    console.log(this.custOrder.product[0].productName);
    /*console.log(this.custOrder);
    console.log(this.custOrder.product.length);
  */
  }

}
