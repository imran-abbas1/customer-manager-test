import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DataStorageService} from './data-storage.service';
import {CustService} from './custservice.service';
import {Customer} from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersResolverService implements Resolve<Customer[]> {

  constructor(private dataStorageService: DataStorageService, private custService: CustService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const customers = this.custService.getCustomers();
    if (customers.length === 0) {
      this.dataStorageService.fetchCustomers();
    } else {
      return customers;
    }
  }
}
