import { action } from 'mobx';

export const AUTH_STORE_KEY = 'auth';

export class AuthStore {
  @action
  login() {
    console.log('login');
  }
}
