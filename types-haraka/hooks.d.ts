declare module 'haraka/hooks' {
  import { Connection } from 'haraka/connection';
  import { Transaction } from 'haraka/transaction';
  import { Server } from 'haraka/server';

  export interface HookResult {
    code?: number;
    msg?: string;
  }

  export type NextFunction = (result?: HookResult | null) => void;

  export interface HookHandlers {
    // Connection lifecycle
    'init_master': (next: NextFunction) => void;
    'init_child': (next: NextFunction) => void;
    'init_http': (next: NextFunction, server: Server) => void;
    'init_wss': (next: NextFunction, server: Server) => void;
    'connect_init': (next: NextFunction, connection: Connection) => void;
    'lookup_rdns': (next: NextFunction, connection: Connection) => void;
    'connect': (next: NextFunction, connection: Connection) => void;
    'capabilities': (next: NextFunction, connection: Connection) => void;
    'unrecognized_command': (next: NextFunction, connection: Connection, command: string) => void;
    'disconnect': (next: NextFunction, connection: Connection) => void;
    'helo': (next: NextFunction, connection: Connection, hostname: string) => void;
    'ehlo': (next: NextFunction, connection: Connection, hostname: string) => void;
    'quit': (next: NextFunction, connection: Connection) => void;
    'vrfy': (next: NextFunction, connection: Connection) => void;
    'noop': (next: NextFunction, connection: Connection) => void;
    'rset': (next: NextFunction, connection: Connection) => void;

    // Mail transaction
    'mail': (next: NextFunction, connection: Connection, params: unknown) => void;
    'rcpt': (next: NextFunction, connection: Connection, params: unknown) => void;
    'rcpt_ok': (next: NextFunction, connection: Connection, params: unknown) => void;
    'data': (next: NextFunction, connection: Connection) => void;
    'data_post': (next: NextFunction, connection: Connection) => void;
    'max_data_exceeded': (next: NextFunction, connection: Connection) => void;
    'queue': (next: NextFunction, connection: Connection) => void;
    'queue_outbound': (next: NextFunction, connection: Connection) => void;
    'queue_ok': (next: NextFunction, connection: Connection) => void;
    'reset_transaction': (next: NextFunction, connection: Connection) => void;
    'deny': (next: NextFunction, connection: Connection) => void;

    // Outbound
    'get_mx': (next: NextFunction, hmail: unknown, domain: string) => void;
    'deferred': (next: NextFunction, hmail: unknown, params: unknown) => void;
    'bounce': (next: NextFunction, hmail: unknown, err: unknown) => void;
    'delivered': (next: NextFunction, hmail: unknown, ...args: unknown[]) => void;
    'send_email': (next: NextFunction, hmail: unknown) => void;
    'pre_send_trans_email': (next: NextFunction, fake_connection: unknown) => void;
    // Add more hooks as needed
  }

  export interface PluginWithHooks {
    register_hook(hook: keyof HookHandlers, method: string): void;
  }
}
declare module 'Haraka/hooks' {
  export * from 'haraka/hooks';
}
