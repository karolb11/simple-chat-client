import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../shared/User';
import {Consts} from '../shared/Consts';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {ApiResponse} from '../shared/ApiResponse';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User = null;
  static CURRENT_USER_ID = 'CURRENT_USER_ID';

  constructor(private http: HttpClient, private router: Router) {
    this.loadCurrentUser();
  }

  private loadCurrentUser(): void {
    const URL = Consts.API_URL + '/user/me';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    this.http.get<User>(URL, options).subscribe(res => {
      this.currentUser = res;
      localStorage.setItem(AuthService.CURRENT_USER_ID, this.currentUser.id.toString());
    });
  }

  public getCurrentUserId(): number {
    if (this.currentUser == null) {
      this.loadCurrentUser();
    }
    return Number(localStorage.getItem(AuthService.CURRENT_USER_ID));
  }

  public login(username: string, password: string): any {
    const URL = Consts.API_URL + '/auth/signIn';
    const postData = {
      username,
      password
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    return this.http.post<ApiResponse>(URL, postData, options).subscribe(res => {
      localStorage.setItem(AuthService.CURRENT_USER_ID, this.currentUser.id.toString());
      this.router.navigateByUrl(`/app`);
    });
  }

  public getMe(): any {
    const URL = Consts.API_URL + '/user/me';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    return this.http.get<ApiResponse>(URL, options);
  }
}
