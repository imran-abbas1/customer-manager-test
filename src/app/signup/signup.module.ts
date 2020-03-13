import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    RouterModule,
    MatInputModule,
    HttpClientModule,

  ]
})
export class SignupModule { }
