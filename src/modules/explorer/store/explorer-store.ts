import { action } from 'mobx';

export const EXPLORER_STORE_KEY = 'explorer';

export class ExplorerStore {
  @action
  rename(params: object) {
    // todo
    console.log('rename', params);
  }
}
