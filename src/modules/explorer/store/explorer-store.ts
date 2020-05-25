import { action, observable } from 'mobx';
import { IFileMeta } from '../../../types/IFileMeta';

export const EXPLORER_STORE_KEY = 'explorer';

class Folder {
  @observable
  public files = [
    { isDir: true, name: 'New folder', path: '/' },
    { isDir: true, name: 'New folder (1)', path: '/' },
    { isDir: false, name: 'New file', path: '/' },
    { isDir: false, name: 'New file (1)', path: '/' },
    { isDir: false, name: 'New file (2)', path: '/' },
    { isDir: false, name: 'New file (3)', path: '/' },
    { isDir: false, name: 'Super brand new file (4)', path: '/' },
    { isDir: false, name: 'New file (5)', path: '/' },
    { isDir: false, name: 'New file (6)', path: '/' },
    { isDir: false, name: 'New file (7)', path: '/' },
    { isDir: false, name: 'New file (8)', path: '/' },
  ];

  @action
  public rename(params: { meta: IFileMeta; name: string }) {
    const file = this.files.find((file) => file.name === params.meta.name);

    if (!file) {
      // TODO: add loger service
      return window.console.log('File not found');
    }

    // TODO: check conflict
    // TODO: check empty name
    file.name = params.name;
  }
}

export class ExplorerStore {
  @observable
  public paths: {
    [path: string]: Folder;
  } = {};

  @action
  public init(path: string) {
    this.paths[path] = new Folder();
  }
}
