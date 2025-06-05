declare module 'haraka-results' {
  /**
   * ResultStore is the main export for handling plugin results in Haraka.
   * Constructed with a connection object.
   */
  export class ResultStore {
    constructor(conn: unknown);
    has(plugin: string, list: string, search: unknown): boolean;
    add(plugin: string, obj: Record<string, unknown>): unknown;
    incr(plugin: string, obj: Record<string, unknown>): void;
    push(plugin: string, obj: Record<string, unknown>): unknown;
    collate(plugin: string): string | undefined;
    get(plugin_or_name: string | { name: string }): Record<string, unknown> | undefined;
    get_all(): Record<string, unknown>;
    resolve_plugin_name(thing: string | { name: string }): string | undefined;
    private_collate(result: Record<string, unknown>, name: string): string[];
    // TODO: Add other methods and refine types as needed
  }
}
