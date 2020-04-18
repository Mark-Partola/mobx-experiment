import { AUTH_STORE_KEY, AuthStore } from './store/auth-store';
import { LoginPage } from './components/login-page';
import { registerStore } from '../entry/registrator';

async function registerAuthModule() {
  registerStore(AUTH_STORE_KEY, new AuthStore());
}

export { registerAuthModule, LoginPage };
