import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  private _token: string = null;

  constructor() {
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
