import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {OrderService} from '../../services/order.service';
import {DataStorageService} from '../../services/data-storage.service';
import {Orders} from '../../orders.model';
import {map} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../../modal/modal.component';
import {MatDialogConfig} from '@angular/material/dialog';
// import { ModalComponent } from '/modal/modal.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, AfterViewInit {
  orders: Orders[] = [];
  order: Orders;
  customersId = [];
  orderAmount = [];
  chart = [];
  type = 'bar';

  /*
  dataSource: any;*/
  dataSource: MatTableDataSource<Orders>;
  displayedColumns = ['orderId', 'email', 'amount', 'details', 'delete'];

  constructor(private orderService: OrderService, private dataStorageService: DataStorageService,
              private router: Router, private matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.orders);
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getOrdersList();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //  this.orders = this.orderService.getOrders();
    /*if (this.orders.length === 0) {
      this.fetchOrder();
    }*/
  }

  ngAfterViewInit() {
  //  this.dataSource.sort = this.sort;
  //  this.dataSource.paginator = this.paginator;
  }

  /*fetchOrder() {
    this.dataStorageService.fetchOrders().subscribe(response => {
      // tslint:disable-next-line:forin
      for (const key in response) {
        this.orders.push(response[key]);
      }
      this.orderService.setOrders(this.orders);
    });

  }*/


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
      this.dataSource = new MatTableDataSource(this.orders);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.showDoughnutGraph();
      // console.log(this.custService.getCustomers());
    });
  }

  showDoughnutGraph() {
    console.log(this.orders.length);
    for (let i = 0; i < this.orders.length; i++) {
      this.orderAmount.push(this.orders[i].amount);
      this.customersId.push(this.orders[i].email);
    }
    console.log(this.orderAmount);
    console.log(this.customersId);
    this.chart = new Chart('canvas', {
      type: this.type,
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
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  //  console.log(filterValue);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  redirectToDetails(email: string) {
    console.log('Details redirected');
    this.router.navigate(['/customer', email]);
  }

  redirectToUpdate(email: string) {
    console.log('Update redirected');
  }

  redirectToDelete(email: string) {
    this.orderService.SelectedOrder = this.orderService.getOrder(email);
    this.order = this.orderService.SelectedOrder;
    const mykey: any = this.order.key;
    this.dataStorageService.deleteOrder(mykey).then(response => {
      console.log(response);
    }).catch(err => console.log(err));
    console.log('deleted');
    this.router.navigate(['/order']);
  }

 /* redirectToDelete(email: string) {
    this.orderService.SelectedOrder = this.orderService.getOrder(email);
    console.log('Delete redirected');
    console.log(this.orderService.SelectedOrder);
    this.deleteOrder();
  }

  deleteOrder() {
    this.order = this.orderService.SelectedOrder;
    console.log(this.order);
    this.dataStorageService.deleteOrder(this.order.key).then(response => {
      console.log(response);
    }).catch(err => console.log(err));


    console.log('deleted');
    this.router.navigate(['/order']);
  }
*/
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  getTotalCost() {
    /*
    return this.orders.reduce((prev, curr) => prev + curr.amount, 0);*/
    return this.orders.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

  createOrder() {
    this.router.navigate(['/add-order']);
  }
}
