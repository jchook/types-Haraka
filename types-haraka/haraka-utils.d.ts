declare module 'haraka-utils' {
  import { Buffer } from 'node:buffer';

  export function uuid(): string;
  export function in_array<T>(item: T, array: T[]): boolean;
  export function to_object(array: string[] | string): Record<string, boolean>;
  export function sort_keys(obj: object): string[];
  export function uniq<T>(arr: T[]): T[];
  export function extend<T, U>(target: T, ...sources: U[]): T & U;
  export function ISODate(d: Date): string;
  export function pad(num: number, n: number, p?: string): string;
  export function date_to_str(d: Date): string;
  export function decode_qp(line: string): Buffer;
  export function encode_qp(str: string | Buffer): string;
  export function node_min(min: string, cur?: string): boolean;
  export const existsSync: (path: string) => boolean;
  export function indexOfLF(buf: Buffer, maxlength?: number): number;
  export function prettySize(size: number): string | number;
  export function valid_regexes(list: string[], file: string): string[];
  export function regexp_escape(text: string): string;
  export function base64(str: string): string;
  export function unbase64(str: string): string;
  export function shuffle<T>(array: T[]): T[];
  export function elapsed(start: number, decimal_places?: number): string;
  export function wildcard_to_regexp(str: string): string;
  export const line_regexp: RegExp;
  export function copyDir(srcPath: string, dstPath: string): void;
  export function copyFile(srcFile: string, dstFile: string): void;
  export function createFile(filePath: string, data: string, info?: Record<string, string>, force?: boolean): void;
  export function mkDir(dstPath: string): void;
  export function getGitCommitId(dir: string): string;
  export function getVersion(pkgDir: string): string;
}
