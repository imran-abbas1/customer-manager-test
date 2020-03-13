import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {DataStorageService} from '../../services/data-storage.service';
import {Orders} from '../../orders.model';
import {map} from 'rxjs/operators';
import { MatPaginator, MatSort} from '@angular/material';
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
  dataSource: any;
  displayedColumns = ['OrderId', 'CustomerId', 'Amount', 'Details', 'Delete'];

  constructor(private orderService: OrderService, private dataStorageService: DataStorageService,
              private router: Router, private matDialog: MatDialog) {
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getOrdersList();
    this.dataSource = this.orders;
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
      this.dataSource = this.orders;
      this.dataSource.sort = this.sort;
      // console.log(this.custService.getCustomers());
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  redirectToDetails(email: string) {
    console.log('Details redirected');
    this.router.navigate(['/customer', email]);
  }

  redirectToUpdate(email: string) {
    console.log('Update redirected');
  }

  redirectToDelete(email: string) {
    console.log('Delete redirected');
    this.orderService.SelectedOrder = this.orderService.getOrder(email);
    this.deleteOrder();
  }

  deleteOrder() {
    this.order = this.orderService.selectedOrder;
    this.dataStorageService.deleteOrder(this.order.key).then(response => {
      console.log(response);
    }).catch(err => console.log(err));
    console.log('deleted');
    this.router.navigate(['/order']);
  }

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
}
