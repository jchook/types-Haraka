declare module 'address-rfc2821' {
  /**
   * Address class encapsulates an email address per RFC-5321.
   * Can be constructed from (user, host) or a single string.
   */
  export class Address {
    constructor(user: string | { original: string }, host?: string);
    user: string;
    host: string;
    original: string;
    original_host?: string;
    is_utf8?: boolean;
    /**
     * Parse an address string and set user/host/original properties.
     */
    parse(addr: string): void;
    /**
     * Returns 1 if the address is null (<>), 0 otherwise.
     */
    isNull(): 0 | 1;
    /**
     * Returns the formatted address, optionally using punycode for the host.
     */
    format(use_punycode?: boolean): string;
    /**
     * Returns the address as a string, optionally using punycode for the host.
     * If set is provided, parses and sets the address.
     */
    address(set?: string, use_punycode?: boolean): string;
    /**
     * Returns the formatted address as a string.
     */
    toString(): string;
    // TODO: Add other methods and refine types
  }
}
