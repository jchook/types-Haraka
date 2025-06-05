declare module 'haraka-notes' {
  /**
   * Notes is a dynamic object for storing arbitrary key-value pairs, with dot-path get/set support.
   * Constructor can take an initial object to populate the notes.
   */
  export class Notes {
    [key: string]: unknown;
    constructor(notes?: Record<string, unknown>);
    /**
     * Set a value at a dot-delimited path (e.g., 'foo.bar.baz')
     */
    set(path: string | string[], value: unknown, onlyWhenUndefined?: boolean): void;
    /**
     * Get a value at a dot-delimited path (e.g., 'foo.bar.baz')
     */
    get(path: string | string[]): unknown;
    // TODO: Add other methods and refine types
  }
}
