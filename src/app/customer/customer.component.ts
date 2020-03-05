import {Component, OnDestroy, OnInit} from '@angular/core';
// import {User} from '../signup/signup.component';
import {Subject, Subscription} from 'rxjs';
import {CustService} from '../custservice.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Customer} from '../customer.model';
import {DataStorageService} from '../data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  currentCustomers: Customer[] = [];
  isCardView = true;
  search: string;
  isSearched = false;
  searchedCustomer: any;
//  dataSource: MatTableDataSource<User[]>;
 // displayedColumns: string[] = ['fname', 'lname', 'address', 'city', 'state', 'ordertotal'];
  constructor(private custService: CustService, private router: Router,
              private dataStorageService: DataStorageService, private authService: AuthService) {

    // Assign the data to the data source for the table to render
    /*this.dataSource = new MatTableDataSource();*/
   // this.dataSource = new MatTableDataSource(this.currentCustomers);
  }
  ngOnInit() {

    this.fetchData();
    this.currentCustomers = this.custService.getCustomers();

 //  this.dataSource = this.currentCustomers;

   // this.dataSource.paginator = this.paginator;
  //  this.dataSource.sort = this.sort;

  }
  fetchData() {
   this.dataStorageService.fetchCustomers().subscribe(response => {
     for (const key in response) {
       //  key instanceof Array
       if (Array.isArray(key) === true) {
         this.currentCustomers.push(response[key[0]]);
       } else {
       this.currentCustomers.push(response[key]);
     }
       this.custService.setCustomers(this.currentCustomers);
     }
   });
  }
  onCardView() {
    this.isCardView = true;
  }
  onListView() {
    this.isCardView = false;
  }
  onAddCustomer() {
    this.router.navigate(['/new-customer']);
  }
  onSearch(item: string) {
    if (item !== '') {
      this.isSearched = true;
      this.searchedCustomer = this.currentCustomers.filter(cust => cust.fname === item || cust.lname === item);
      console.log(this.searchedCustomer);
    }
  }
  onClear() {
    this.search = '';
    this.isSearched = false;

  }

  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }*/
}
