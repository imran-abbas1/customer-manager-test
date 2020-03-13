import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DataStorageService} from '../services/data-storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>, private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    alert('You have deleted all orders.');

    this.closeModal();
    // this.deleteAllOrders();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

  deleteAllOrders() {
    this.dataStorageService.deleteAll().catch(err => console.log(err));
  }


}
