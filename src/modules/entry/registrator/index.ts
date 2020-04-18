const stores: { [key: string]: object } = {};

export function registerStore<T extends object>(key: string, store: T) {
  stores[key] = store;
}

export function getStores() {
  return stores;
}
