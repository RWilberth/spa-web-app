import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Auth } from '../models/auth';
import { Helpers } from '../../util/helpers';
import { RegularExpresions } from '../../util/global/regular-expresions';

const users: Auth[] = [
  {
    id: 1,
    firstName: 'Wilberth Antonio',
    email: 'cloud_ultimate@hotmail.com',
    telephone: '9999604202',
    lastName: 'Rivas Bastarrachea',
    password: 'admin',
    token: '01929983902130909213',
  },
];

@Injectable()
export class FackeAuthBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute(): Observable<any> {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate(): Observable<any> {
      const { username, password } = body;
      let user;
      if (Helpers.testPattern(RegularExpresions.EMAIL_ADDRESS, username)) {
        user = users.find(
          (u) => u.email === username && u.password === password
        );
      }
      if (Helpers.testPattern(RegularExpresions.CELPHONE, username)) {
        user = users.find(
          (u) => u.telephone === username && u.password === password
        );
      }
      if (!user) {
        return error('Username or password is incorrect');
      }
      return ok({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        telephone: user.telephone,
        token: 'fake-jwt-token',
      });
    }

    function getUsers(): Observable<any> {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(users);
    }

    // helper functions

    function ok(body?): Observable<any> {
      return ok(new HttpResponse({ status: 200, body }));
    }

    function error(message): Observable<any> {
      return throwError({ error: { message } });
    }

    function unauthorized(): Observable<any> {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn(): boolean {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FackeAuthBackendInterceptor,
  multi: true,
};
