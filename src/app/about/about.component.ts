import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  options: string[] = ['Signin', 'logout', 'test'];
  width: any;
  marginLeft: any;
  flag = false;
  constructor() { }

  ngOnInit() {
    this.openSidebar();
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

}
