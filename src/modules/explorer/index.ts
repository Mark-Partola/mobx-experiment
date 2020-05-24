import { registerStore } from '../entry/registrator';
import { EXPLORER_STORE_KEY, ExplorerStore } from './store/explorer-store';
import { Explorer } from './components/explorer';

async function registerExplorerModule() {
  registerStore(EXPLORER_STORE_KEY, new ExplorerStore());
}

export { registerExplorerModule, Explorer };
