import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Customer} from '../customer.model';
import {Agent} from './Agent.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  registerForm: FormGroup;
  isLogin = true;
  isLoading = false;
  error: string = null;
  agent = {} as Agent;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  getEmailErrorMessage() {
    if (this.registerForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    if (this.registerForm.get('password').hasError('minlength')) {
      return 'You must enter a password of length atleast 6';
    }
    return this.registerForm.get('password').hasError('required') ? 'You must enter a value' : '';
  }
  register() {
    // console.log(this.registerForm.value);
    this.agent.email =  this.registerForm.controls.email.value;
    this.agent.password = this.registerForm.controls.password.value;
    // console.log(this.agent.email);
    // localStorage.setItem('userData', JSON.stringify(this.agent));
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    if (this.isLogin) {
      authObs = this.authService.login(this.agent.email, this.agent.password);
    } else {
      authObs = this.authService.signup(this.agent.email, this.agent.password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/blog']);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    });

    this.registerForm.reset();
    // this.authService.addAgent(this.registerForm.value);

   // this.router.navigate(['/customer']);
  }
  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

}
