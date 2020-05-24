import { registerEntryModule } from './modules/entry';
import { registerAuthModule } from './modules/auth';
import { registerExplorerModule } from './modules/explorer';

(async () => {
  await registerAuthModule();

  await registerExplorerModule();

  /**
   * start application
   */
  await registerEntryModule();
})();
