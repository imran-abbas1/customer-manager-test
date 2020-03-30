import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Orders} from '../../orders.model';
import {Router} from '@angular/router';
import {DataStorageService} from '../../services/data-storage.service';
import {Feedback} from '../../feedback.model';

@Component({
  selector: 'app-feedback',
  template: `
    <div class="FeedbackForm" style="margin-top: 100px; margin-left: 0px">
      <div class="heading">
        Please Let us know your feedback
      </div>
      <div class="modal-content">
        <form [formGroup]="feedbackForm"
              (ngSubmit)="addFeedback()">
          <mat-form-field appearance="outline">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Steve" formControlName="name" id="name" class="form-control" required>
            <!--  <mat-hint>Enter First Name</mat-hint> -->
          </mat-form-field>
          <br>
          <mat-form-field appearance="outline">
            <mat-label>E-mail</mat-label>
            <input matInput placeholder="user@abc.com" formControlName="email" id="email" class="form-control" required>
          </mat-form-field>
          <br>
          <mat-form-field appearance="outline">
            <mat-label>Contact Number</mat-label>
            <input matInput placeholder="9898989898" formControlName="phone" id="phone" class="form-control" required>
          </mat-form-field>
          <br>
          <mat-form-field appearance="outline">
            <mat-label>Your Feedback</mat-label>
            <input matInput placeholder="I'm happy with this product" formControlName="message" id="message" class="form-control" required>
          </mat-form-field>
          <br>
          <mat-form-field appearance="outline">
            <mat-label>Your Image</mat-label>
            <input matInput placeholder="http://mypic.jpg" formControlName="img" id="img" class="form-control" required>
          </mat-form-field>
          <br>
          <button mat-raised-button [disabled]="feedbackForm.invalid">Add Your Feedback</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    h2 {
      text-align: center;
      margin: auto;
      padding: unset;
    }
    .mat-tab-nav-bar {
      z-index: 1;
    }
    .AddOrderForm {
      padding: 20px;
      text-align: center;
      margin-left: 20px;
      border: 10px solid black;
      background-color: lightgrey;

    }
    .heading {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    form {
      text-align: center;
    }
    .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 35%;
      margin: auto;
      margin-bottom: 40px;
      padding: 15px;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: 10px solid black;
      border-radius: 0.3rem;
      outline: 0;
      z-index: 0;
    }

    button {
      color: white;
      background-color: gray;
      margin-bottom: 10px;
    }

    /* Responsive columns - one column layout (vertical) on small screens */
    @media screen and (max-width: 600px) {
      .modal-content {
        width: 80%;
      }
      .heading {
        margin-top: 150px !important;
      }
    }

  `]
})

export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  newFeedback = {} as Feedback;
  constructor(private fb: FormBuilder, private router: Router, private dataStorageService: DataStorageService) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      img: ['', Validators.required]
    });
  }
  ngOnInit(): void {

  }
  addFeedback() {
    console.log(this.feedbackForm.value);
    this.dataStorageService.storeFeedback(this.feedbackForm.value);
    this.feedbackForm.reset();
    this.router.navigate(['sucess-feedback']);
  }
}
