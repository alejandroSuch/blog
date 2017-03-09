import {Injectable} from '@angular/core';
import {BaseRequestOptions, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {AuthService} from './auth.service';

const AUTHORIZATION_HEADER = 'autorization';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {

  constructor(private authService: AuthService) {
    super();
  }

  merge(options?: RequestOptionsArgs): RequestOptions {
    debugger;
    if (this.authService.token) {
      this.headers.append(AUTHORIZATION_HEADER, `Bearer ${this.authService.token}`);
    } else {
      this.headers.delete(AUTHORIZATION_HEADER);
    }
    return super.merge(options);
  }

}
