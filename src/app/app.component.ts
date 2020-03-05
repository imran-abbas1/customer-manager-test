import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Customers';
  isAuthenticated = false;
  private userSub: Subscription;
  username: string;
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(this.isAuthenticated);
      this.username = user.email.substring(0, user.email.indexOf('@'));
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
