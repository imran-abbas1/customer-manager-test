import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from './auth/auth.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Customers';
  choosenOption: any;
  width: any;
  marginLeft: any;
  flag = false;
  isAuthenticated = false;
  private userSub: Subscription;
  options: string[] = ['signin', 'logout', 'test'];
  username: string;
  isLoggedIn$: Observable<boolean>;

  description = 'Angular-Fire-Demo';
  itemValue = '';
  items: Observable<any[]>;

  constructor(private authService: AuthService, public db: AngularFireDatabase, private router: Router) {
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
    this.closeSidebar();
  }
  onDropdownOpen() {
    const dropdown = document.getElementsByClassName('dropdown-btn');
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }

  onDropdownClose() {
    const dropdown = document.getElementsByClassName('dropdown-btn');
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = 'none';
  });
    }
  }

  authenticate() {
    if (this.choosenOption === 'signin') {
      this.router.navigate(['login']);
    } else if (this.choosenOption === 'logout') {
      this.router.navigate(['logout']);
    } else if (this.choosenOption === 'test') {
      this.router.navigate(['order']);
    }
  }

  openSidebar() {
    if (this.flag === true) {
      this.closeSidebar();
    } else {
      this.width = 160;
      this.marginLeft = 160;
      this.flag = !this.flag;
    }

  }

  closeSidebar() {
    this.width = 30;
    this.marginLeft = 30;
    this.flag = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
