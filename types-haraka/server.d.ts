declare module 'haraka/server' {
  /**
   * TypeScript interface for the Haraka Server object, based on server.js
   */
  export interface Server {
    logger: unknown; // TODO: refine type
    config: unknown; // TODO: refine type
    plugins: unknown; // TODO: refine type
    notes: Record<string, unknown>;
    listeners: unknown[];
    cfg?: any;
    http?: any;
    cluster?: any;
    ready?: number;
    default_host?: boolean;

    load_smtp_ini(): void;
    load_http_ini(): void;
    daemonize(): void;
    flushQueue(domain: string): void;
    gracefulRestart(): void;
    stopListeners(): void;
    performShutdown(): void;
    gracefulShutdown(): void;
    sendToMaster(command: string, params: any): void;
    receiveAsMaster(command: string, params: any): void;
    get_listen_addrs(cfg: any, port?: number): string[];
    createServer(params: Record<string, unknown>): void;
    load_default_tls_config(done: (opts: any) => void): void;
    get_smtp_server(ep: any, inactivity_timeout: number): Promise<any>;
    setup_smtp_listeners(plugins2: any, type: string, inactivity_timeout: number): Promise<void>;
    setup_http_listeners(): Promise<void>;
    init_master_respond(retval: any, msg: any): void;
    init_child_respond(retval: any, msg: any): void;
    listening(): void;
    init_http_respond(): void;
    init_wss_respond(): void;
    get_http_docroot(): string;
    handle404(req: any, res: any): void;
    // Add more properties/methods as needed
  }
  export const Server: Server;
}
declare module 'Haraka/server' {
  export * from 'haraka/server';
}
