import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { ExplorerStore, EXPLORER_STORE_KEY } from './explorer-store';

export function useExplorerStore(): ExplorerStore {
  const stores = React.useContext(MobXProviderContext);

  return stores[EXPLORER_STORE_KEY];
}
