import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {AuthGuard} from './auth/auth.guard';
import {CustomerlistComponent} from './customer/customerlist/customerlist.component';
import {CustomerdetailsComponent} from './customer/customerdetails/customerdetails.component';
import {CustomerordersComponent} from './customer/customerorders/customerorders.component';
import {EditcustomerComponent} from './customer/editcustomer/editcustomer.component';
import {AboutComponent} from './about/about.component';
import {AuthComponent} from './auth/auth.component';
import {OrdersModule} from './orders/orders.module';
import {CustomersResolverService} from './services/customers-resolver.service';
import {OrdersResolverService} from './services/orders-resolver.service';
import {SignupModule} from './signup/signup.module';
import {LogoutModule} from './logout/logout.module';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'customer'},
  {path: 'customer', component: CustomerComponent, canActivate: [AuthGuard], resolve: [CustomersResolverService],
    children: [
      {path: ':id', component: CustomerlistComponent,
        children: [
          {path: '', pathMatch: 'full', redirectTo: 'details'},
          {path: 'details', component: CustomerdetailsComponent},
          {path: 'orders', component: CustomerordersComponent, resolve: [OrdersResolverService]},
          {path: 'edit', component: EditcustomerComponent}
        ]}
    ]},
  // loadChildren: 'component: OrderComponent loadChildren: './orders/orders.module#OrdersModule'
  {path: 'order', loadChildren: () => OrdersModule, canActivate: [AuthGuard],
    resolve: [OrdersResolverService, CustomersResolverService]},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: AuthComponent, resolve: [CustomersResolverService]},
  {path: 'logout', loadChildren: () => LogoutModule},
  {path: 'new-customer', loadChildren: () => SignupModule, canActivate: [AuthGuard], resolve: [CustomersResolverService]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
