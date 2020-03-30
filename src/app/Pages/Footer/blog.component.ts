import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {DataStorageService} from '../../services/data-storage.service';
import {Feedback} from '../../feedback.model';
import {FeedbackService} from '../../services/feedback.service';

@Component({
  selector: 'app-blog',
  template: `
    <div class="header" style="margin-top: 100px; margin-left: 50px;">
      <div class="slide-show">
        <h2>Our Customers</h2>
      <slideshow [height]="'100%;'"
                            [minHeight]="'50vh'"
                            [autoPlay]="true"
                            [showArrows]="false"
                            [imageUrls]="imageUrlArray"
                            [autoPlayWaitForLazyLoad]="true">
    </slideshow>
    </div>
      <div class="row">
      <div *ngFor="let feed of feedbackData">
        <div class="column">
          <div class="card">
            <!--
            <img src="../../../assets/12.png" width="100%;">
            -->
            <img [src]="feed.img | safe: 'url' " alt="{{feed.name}}" style="width:100%;">
               <div class="content">
              <div>{{feed.imgSrc |json }}</div>
              <div>{{feed.name}}</div>
              <!--
              <div>{{feed.email}}</div>
              <div>{{feed.phone}}</div>-->
              <div>{{feed.message}}</div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  `,
  styles: [`
    h2 {
    text-align: center;
    margin: auto;
    padding: unset;
    margin-bottom: 20px;
  }
    .slide-show {
      width: 50vh;
      text-align: center;
      margin: auto;
    }
    /* Remove extra left and right margins, due to padding in columns */
    .row {margin: 0 -5px;}

    /* Clear floats after the columns */
    .row:after {
      content: "";
      display: table;
      clear: both;
    }

    /* Float four columns side by side */
    .column {
      float: left;
      width: 25%;
      padding: 10px 10px;
    }

    /* Style the counter cards */
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
      padding: 16px;
      text-align: center;
      background-color: #f1f1f1;
      margin-right: 45px;
      margin-top: 15px;
    }

    /* Responsive columns - one column layout (vertical) on small screens */
    @media screen and (max-width: 600px) {
      .column {
        width: 100%;
        display: block;
        margin-bottom: 20px;
      }

      mat-card {
        padding-left: 0px !important;
        margin-top: 90px !important;
      }

      .header {
        margin-top: 150px !important;
        margin-left: 0px !important;
      }

      .card {
        margin-right: 30px !important;
        margin-left: 35px !important;
      }
    }

  `]
})

export class BlogComponent implements OnInit {
  feedbackData: Feedback[] = [];
  imageUrlArray = [
    '../../../assets/1.png', '../../../assets/2.png', '../../../assets/3.jpg', '../../../assets/4.png', '../../../assets/5.png',
    '../../../assets/6.png', '../../../assets/7.png', '../../../assets/8.png', '../../../assets/9.jpg', '../../../assets/10.jpg'
  ];
  numFeedback: number;
  constructor(private dataStorageService: DataStorageService, private feedbackService: FeedbackService) {
  }
  ngOnInit(): void {
    this.getFeedbackList();
  }

  getFeedbackList() {
    this.dataStorageService.getFeedbackList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(feedback => {
      // this.custService.setCustomers(customers);
      this.feedbackData = feedback;
      console.log(this.feedbackData);
      this.feedbackService.setFeedbacks(this.feedbackData);
      this.calc();
      // console.log(this.custService.getCustomers());
    });
  }

  calc() {
    this.numFeedback = this.feedbackData.length;
    this.feedbackService.countFeedback = this.numFeedback;
  }
}
