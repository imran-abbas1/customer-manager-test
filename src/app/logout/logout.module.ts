import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutRoutingModule } from './logout-routing.module';
import {LogoutComponent} from './logout.component';
import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    LogoutRoutingModule
  ],
  providers: [AuthService]
})
export class LogoutModule { }
