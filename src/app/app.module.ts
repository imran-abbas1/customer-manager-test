import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
// import {GoogleMapsModule} from '@angular/google-maps';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatChipsModule, MatDividerModule, MatInputModule, MatTableModule, MatTabsModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
import {CustomersResolverService} from './customers-resolver.service';
import {OrdersResolverService} from './orders-resolver.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AuthGuard} from './auth/auth.guard';




const approutes: Routes = [
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
  {path: 'order', component: OrderComponent, canActivate: [AuthGuard], resolve: [OrdersResolverService]},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: AuthComponent, resolve: [CustomersResolverService]},
  {path: 'logout', component: LogoutComponent},
  {path: 'new-customer', component: SignupComponent, canActivate: [AuthGuard], resolve: [CustomersResolverService]}
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogoutComponent,
    CustomerComponent,
    OrderComponent,
    AboutComponent,
    CustomerlistComponent,
    CustomerordersComponent,
    EditcustomerComponent,
    CustomerdetailsComponent,
    AuthComponent,
    LoadingspinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatTabsModule,
    // GoogleMapsModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZeO64NMQj_XWNp_U_JfzLgVUz0K_v8KE'
    })*/
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
