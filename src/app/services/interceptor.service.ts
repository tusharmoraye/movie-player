import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let newRequest = request.clone({
      headers: request.headers.append('Source', '*')
    })
    return next.handle(newRequest);
  }

}
