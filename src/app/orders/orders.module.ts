import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from '../services/order.service';
import {OrdersResolverService} from '../services/orders-resolver.service';
import {MatDividerModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {OrdersRoutingModule} from './orders.routing.module';
import {OrderComponent} from './order/order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
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
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [OrderService, OrdersResolverService]
})
export class OrdersModule { }
