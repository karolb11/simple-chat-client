import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../shared/User';
import {Consts} from '../shared/Consts';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {ApiResponse} from '../shared/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserSubject: BehaviorSubject<User>;
  public loggedInUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.loggedInUserSubject = new BehaviorSubject<User>(null);
    this.loggedInUser = this.loggedInUserSubject.asObservable();
  }

  public setLoggedUser(loggedUser: User): void {
    this.loggedInUserSubject.next(loggedUser);
  }

  public getLoggedUser(): User {
    return this.loggedInUserSubject.value;
  }

  public login(username: string, password: string): Observable<any> {
    const URL = Consts.API_URL + '/auth/signIn';
    const postData = {
      username,
      password
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
    };
    console.log(postData);
    return this.http.post<ApiResponse>(URL, postData, options);
  }

  public getMe(): any {
    const URL = Consts.API_URL + '/user/me';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
    };
    return this.http.get<ApiResponse>(URL, options);
  }
}
