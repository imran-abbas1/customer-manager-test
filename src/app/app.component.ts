import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from './auth/auth.service';
import {AngularFireDatabase} from '@angular/fire/database';


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
  isLoggedIn$: Observable<boolean>;

  description = 'Angular-Fire-Demo';
  itemValue = '';
  items: Observable<any[]>;

  constructor(private authService: AuthService, public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  onSubmit() {
    this.db.list('items').push({content: this.itemValue});
    this.itemValue = '';

  }
  ngOnInit() {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(this.isAuthenticated);
      this.username = user.email.substring(0, user.email.indexOf('@'));
    });
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
