import React from 'react';
import { Provider } from 'mobx-react';
import { getStores } from './registrator';
import { Explorer } from '../explorer';

import '../../styles/root.css';

const stores = getStores();

(window as any)._____APP_STATE_____ = stores;

const Entry: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider {...stores}>
        <Explorer />
      </Provider>
    </React.StrictMode>
  );
};

export { Entry };
