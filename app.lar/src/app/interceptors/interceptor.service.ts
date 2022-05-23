import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const headersAux = new HttpHeaders()
    .set('Content-Type', 'Application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'POST')
    .set('Access-Control-Allow-Methods', 'GET')
    .set('Access-Control-Allow-Methods', 'PUT')
    .set('Access-Control-Allow-Methods', 'DELETE')
    .set('Access-Control-Allow-Headers', 'Origin')
    .set('Access-Control-Allow-Credentials', 'true');

    const res = request.clone({
      headers: headersAux,
    });

    return next.handle(res);
  }
}
