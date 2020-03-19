import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustService} from '../../services/custservice.service';
import {Orders} from '../../orders.model';
import {DataStorageService} from '../../services/data-storage.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  addOrderForm: FormGroup;
  product: FormArray;
  newOrder = {} as Orders;
  constructor(private fb: FormBuilder, private router: Router, private customerService: CustService,
              private dataStorageService: DataStorageService) {
    this.addOrderForm = this.fb.group({
      orderId: ['', Validators.required],
      amount: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      product: this.fb.array([ this.createNewOrder() ])
     // newOrders: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  /*get newOrders(): FormArray {
    return this.addOrderForm.get('product') as FormArray;
  }*/

  addProduct() {
    this.product = this.addOrderForm.get('product') as FormArray;
    this.product.push(this.createNewOrder());
  }

  addOrder() {
    console.log(this.addOrderForm.value);
    this.newOrder.email = this.addOrderForm.controls.email.value;
    this.newOrder.orderId = this.addOrderForm.controls.orderId.value;
    this.newOrder.amount = this.addOrderForm.controls.amount.value;
    this.dataStorageService.storeOrders(this.addOrderForm.value);
    this.addOrderForm.reset();
    this.router.navigate(['/order']);
  }

  /*removeOrder(i: number) {
    this.newOrders.removeAt(i);
  }*/

  createNewOrder(): FormGroup {
    return this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required]
    });
  }

}
