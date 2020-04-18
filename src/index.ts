import { registerEntryModule } from './modules/entry';
import { registerAuthModule } from './modules/auth';

(async () => {
  await registerAuthModule();

  /**
   * start application
   */
  await registerEntryModule();
})();
