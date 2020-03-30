import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from '../services/order.service';
import {OrdersResolverService} from '../services/orders-resolver.service';
import {MatDividerModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {OrdersRoutingModule} from './orders.routing.module';
import {OrderComponent} from './order/order.component';
import { AddOrderComponent } from './add-order/add-order.component';


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
    MatProgressBarModule,
    MatInputModule,
    HttpClientModule,
  ],
  exports: [
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
