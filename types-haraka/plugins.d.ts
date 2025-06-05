declare module 'haraka/plugins' {
  import { Server } from 'haraka/server';
  import { HookHandlers } from 'haraka/hooks';

  export class Plugin implements Partial<HookHandlers> {
    register(server: Server): void;
    register_hook(hook: keyof HookHandlers, method: string): void;
    // TODO: Add other methods
  }

  export class PluginLoader {
    // TODO: Define methods
  }
}
declare module 'Haraka/plugins' {
  export * from 'haraka/plugins';
}
