import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
// import {GoogleMapsModule} from '@angular/google-maps';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatChipsModule, MatDividerModule, MatIconModule, MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSortModule, MatTableModule,
  MatTabsModule
} from '@angular/material';
import {OrdersModule} from './orders/orders.module';
import {MatCardModule} from '@angular/material/card';

import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { CustomerordersComponent } from './customer/customerorders/customerorders.component';
import { EditcustomerComponent } from './customer/editcustomer/editcustomer.component';
import { CustomerdetailsComponent } from './customer/customerdetails/customerdetails.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
/*
import {AuthGuard} from './auth/auth.guard';
*/
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ModalComponent} from './modal/modal.component';
import {AppRoutingModule} from './app.routing.module';
import { DoughnutComponent } from './doughnut/doughnut.component';
import {DropdownDirective} from './dropdown.directive';
import {TermsndConditionComponent} from './Pages/Footer/t&c.component';
import {PrivacypolicyComponent} from './Pages/Footer/privacypolicy.component';
import {FeedbackComponent} from './Pages/Footer/feedback.component';
import {BlogComponent} from './Pages/Footer/blog.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SafePipeModule} from 'safe-pipe';



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
    DoughnutComponent,
    TermsndConditionComponent,
    PrivacypolicyComponent,
    FeedbackComponent,
    BlogComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSelectModule,
    SlideshowModule,
    MatDividerModule,
    SafePipeModule,
    /*

    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressBarModule,*/
    MatInputModule,
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
