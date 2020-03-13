import {Component, Input, OnInit} from '@angular/core';
// import {User} from '../signup/signup.component';
import {CustService} from '../../services/custservice.service';
import {OrderService} from '../../services/order.service';
import {Orders} from '../../orders.model';
import {DataStorageService} from '../../services/data-storage.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-customerorders',
  templateUrl: './customerorders.component.html',
  styleUrls: ['./customerorders.component.css']
})
export class CustomerordersComponent implements OnInit {
  cust: any;
  custOrder: Orders[];
  private orders: Orders[] = [];
  constructor(private customerService: CustService,
              private orderService: OrderService,
              private dataStorageService: DataStorageService) {     this.getOrdersList();
  }

  ngOnInit() {
    // console.log(this.customerService.selectedCustomer);
    /*if (this.orders.length === 0) {
      this.fetchOrder();
    }*/
    console.log(this.orders);
    /*
    this.cust = this.customerService.SelectedCustomer;
    /!*console.log(this.cust.email);*!/
    this.custOrder = this.orderService.getOrder(this.cust.email);*/
    // console.log(this.custOrder.product[0].productName);
    /*console.log(this.custOrder);
    console.log(this.custOrder.product.length);
  */
  }

  /*fetchOrder() {
    this.dataStorageService.fetchOrders().subscribe(response => {
      // tslint:disable-next-line:forin
      for (const key in response) {
        this.orders.push(response[key]);
      }
      this.orderService.setOrders(this.orders);
    });*/
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
      this.orderService.setOrders(this.orders);
      this.cust = this.customerService.SelectedCustomer;
      this.custOrder = this.orderService.getOrder(this.cust.email);
      this.orderService.countOrders = this.custOrder.length;
      // console.log(this.custService.getCustomers());
    });
  }

  }
