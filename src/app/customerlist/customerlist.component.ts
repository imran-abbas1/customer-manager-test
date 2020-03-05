import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CustService} from '../custservice.service';
// import {User} from '../signup/signup.component';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  useremail: string;
  customer: any;
  constructor(private route: ActivatedRoute, private custService: CustService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.useremail = params.id;
      this.custService.SelectedCustomer = this.custService.getCustomer(this.useremail);
      console.log(this.useremail);
    });
    /*this.route.params.subscribe((params: Params) => {
      this.useremail = params.id;
      this.customer = this.custService.getCustomer(this.useremail);
      console.log(this.useremail);
      console.log(this.customer);
    });*/
  }


}
