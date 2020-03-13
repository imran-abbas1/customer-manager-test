import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
// import {GoogleMapsModule} from '@angular/google-maps';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*
import {MatFormFieldModule} from '@angular/material/form-field';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
*/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatChipsModule,
  /*MatDividerModule, MatIconModule,
  MatInputModule,
  MatPaginatorModule,*/ MatProgressSpinnerModule, MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {OrdersModule} from './orders/orders.module';
import {MatCardModule} from '@angular/material/card';
/*
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
*/
import { CustomerComponent } from './customer/customer.component';
/*
import { OrderComponent } from './orders/order/order.component';
*/
import { AboutComponent } from './about/about.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { CustomerordersComponent } from './customer/customerorders/customerorders.component';
import { EditcustomerComponent } from './customer/editcustomer/editcustomer.component';
import { CustomerdetailsComponent } from './customer/customerdetails/customerdetails.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
/*
import {CustomersResolverService} from './customers-resolver.service';
import {OrdersResolverService} from './orders-resolver.service';
*/
import {AuthInterceptorService} from './auth/auth-interceptor.service';
/*
import {AuthGuard} from './auth/auth.guard';
*/
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ModalComponent} from './modal/modal.component';
import {AppRoutingModule} from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AboutComponent,
    CustomerlistComponent,
    CustomerordersComponent,
    EditcustomerComponent,
    CustomerdetailsComponent,
    AuthComponent,
    LoadingspinnerComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    AppRoutingModule,
    // GoogleMapsModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZeO64NMQj_XWNp_U_JfzLgVUz0K_v8KE'
    })*/
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
