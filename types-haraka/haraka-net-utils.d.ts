declare module 'haraka-net-utils' {
  export const config: unknown;
  export function long_to_ip(n: number): string;
  export function dec_to_hex(d: number): string;
  export function hex_to_dec(h: string): number;
  export function ip_to_long(ip: string): number | false;
  export function octets_in_string(str: string, oct1: string, oct2: string): boolean;
  export function is_ip_in_str(ip: string, str: string): boolean;
  export function is_private_ipv4(ip: string): boolean;
  export function on_local_interface(ip: string): boolean;
  export function is_local_host(dst_host: string): Promise<boolean>;
  export function is_local_ip(ip: string): boolean;
  export function is_local_ipv4(ip: string): boolean;
  export function is_local_ipv6(ip: string): boolean;
  export function is_private_ip(ip: string): boolean;
  export function is_rfc1918(ip: string): boolean;
  export function is_ip_literal(host: string): boolean;
  export function is_ipv4_literal(host: string): boolean;
  export function same_ipv4_network(ip: string, ipList: string[]): boolean;
  export function get_ipany_re(prefix?: string, suffix?: string, modifier?: string): RegExp;
  export function get_ips_by_host(hostname: string, done?: (errors: unknown[], ips: string[]) => void): Promise<string[]>;
  export function ipv6_reverse(ipv6: string): string;
  export function ipv6_bogus(ipv6: string): boolean;
  export function ip_in_list(list: any, ip: string): boolean;
  export function get_primary_host_name(): string;
  export function get_mx(...args: any[]): any;
  export function get_implicit_mx(...args: any[]): any;
  export function resolve_mx_hosts(...args: any[]): any;
  export function get_public_ip(): Promise<string>;
  export function get_public_ip_async(): Promise<string>;
  export const HarakaMx: unknown;
  export function add_line_processor(socket: any): void;
  // TODO: Add other utility functions
}
