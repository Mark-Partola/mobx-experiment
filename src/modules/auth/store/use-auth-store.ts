import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { AuthStore, AUTH_STORE_KEY } from './auth-store';

export function useAuthStore(): AuthStore {
  const stores = React.useContext(MobXProviderContext);

  return stores[AUTH_STORE_KEY];
}
