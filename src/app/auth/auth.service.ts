import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {User} from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient) { }
  addAgent(agent: any) {

  }
  signup(myemail: string, mypassword: string) {
    // tslint:disable-next-line:max-line-length
   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1ST79-vsmh5VabQGQ7H58SjctBska0Fk', {
      email: myemail,
      password: mypassword,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
   }));
  }

  login(myemail: string, mypassword: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1ST79-vsmh5VabQGQ7H58SjctBska0Fk', {
      email: myemail,
      password: mypassword,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }
      private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(email, userId, token, expirationDate);
      this.user.next(user);
    }

    private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Unknown Error Occoured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'THIS EMAIL ID. ALREADY EXISTS!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'INCORRECT PASSWORD!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'THIS EMAIL DOESNOT EXIST, PLEASE SIGNUP FIRST!';
        break;
    }
    return throwError(errorMessage);
  }

}
