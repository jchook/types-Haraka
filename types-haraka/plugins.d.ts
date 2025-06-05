declare module 'haraka/plugins' {
  import { Server } from 'haraka/server';

  export class Plugin {
    register(server: Server): void;
    // TODO: Add other methods
  }

  export class PluginLoader {
    // TODO: Define methods
  }
}
declare module 'Haraka/plugins' {
  export * from 'haraka/plugins';
}
