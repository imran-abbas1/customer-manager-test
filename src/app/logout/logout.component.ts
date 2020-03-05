import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();

  }

}
