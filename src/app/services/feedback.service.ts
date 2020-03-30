import { Injectable } from '@angular/core';
import {Feedback} from '../feedback.model';
import {Subject} from 'rxjs';
import {Customer} from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedback: Feedback[] = [];
  feedbackChanged = new Subject<Feedback[]>();
  selectedFeedback: any;
  countFeedback: number;
  index: number;

  constructor() { }
  getFeedbacks() {
    return this.feedback.slice();
  }

  getFeedback(email: string) {
    return this.feedback.find(o => o.email === email);
  }

  setFeedbacks(feedbacks: Feedback[]) {
    this.feedback = feedbacks;
    this.feedbackChanged.next(this.feedback.slice());
  }

  addFeedback(newfeedback: Feedback) {
    this.feedback.push(newfeedback);
    this.feedbackChanged.next(this.feedback.slice());
  }

  updateFeedback(email: string, newFeedback: Feedback) {
    this.index = this.feedback.indexOf(this.feedback.find(o => o.email === email));
    this.feedback[this.index] = newFeedback;
    this.feedbackChanged.next(this.feedback.slice());
    // this.dataStorageService.storeCustomers()
  }

  deleteFeedback(index: number) {
    this.feedback.splice(index, 1);
    this.feedbackChanged.next(this.feedback.slice());
  }

  set SelectedFeedback(value) {
    this.selectedFeedback = value;
  }

  get SelectedFeedback() {
    return this.selectedFeedback;
  }

  set CountFeedback(value) {
    this.countFeedback = value;
  }

  get CountFeedback() {
    return this.countFeedback;
  }

}
