import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {CustomerComponent} from './customer/customer.component';
import {CustomerlistComponent} from './customer/customerlist/customerlist.component';
import {CustomerdetailsComponent} from './customer/customerdetails/customerdetails.component';
import {CustomerordersComponent} from './customer/customerorders/customerorders.component';
import {EditcustomerComponent} from './customer/editcustomer/editcustomer.component';
import {AboutComponent} from './about/about.component';
import {AuthComponent} from './auth/auth.component';
import {TermsndConditionComponent} from './Pages/Footer/t&c.component';
import {BlogComponent} from './Pages/Footer/blog.component';
import {FeedbackComponent} from './Pages/Footer/feedback.component';
import {PrivacypolicyComponent} from './Pages/Footer/privacypolicy.component';
import {OrdersModule} from './orders/orders.module';
import {CustomersResolverService} from './services/customers-resolver.service';
import {OrdersResolverService} from './services/orders-resolver.service';
import {SignupModule} from './signup/signup.module';
import {LogoutModule} from './logout/logout.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'blog'},
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
  {path: 'new-customer', loadChildren: () => SignupModule, canActivate: [AuthGuard], resolve: [CustomersResolverService]},
  {path: 'terms-conditions', component: TermsndConditionComponent},
  {path: 'privacy-policy', component: PrivacypolicyComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'blog', component: BlogComponent}/*,
  {path: '**', redirectTo: 'customer'}*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
