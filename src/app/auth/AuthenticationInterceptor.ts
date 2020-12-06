import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({withCredentials: true});
    return next.handle(clonedRequest)
        .pipe(catchError(err => this.handleAuthError(err)));
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    console.log(err);
    if (err.status === 401 || err.status === 403) {
      this.router.navigateByUrl(`/sign-in`);
      return of(err.message);
    }
    // handle your auth error or rethrow
    return Observable.throw(err);
  }
}
