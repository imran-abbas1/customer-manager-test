import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from '../services/order.service';
import {OrdersResolverService} from '../services/orders-resolver.service';
import {MatDividerModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {OrdersRoutingModule} from './orders.routing.module';
import {OrderComponent} from './order/order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    OrderComponent,
    AddOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule,
    MatInputModule,
    HttpClientModule,
  ],
  exports: [
    OrderComponent,
    MatDialogModule,
    MatDividerModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [OrderService, OrdersResolverService]
})
export class OrdersModule { }
