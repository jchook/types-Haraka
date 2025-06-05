declare module 'haraka-constants' {
  export const cont: number;
  export const stop: number;
  export const deny: number;
  export const denysoft: number;
  export const denydisconnect: number;
  export const disconnect: number;
  export const ok: number;
  export const next_hook: number;
  export const delay: number;
  export const denysoftdisconnect: number;
  export const write_excl: number;

  export function importConstants(object: Record<string, unknown>): void;
  export function translate(value: number): string;

  export const connection: {
    state: {
      CMD: number;
      LOOP: number;
      DATA: number;
      PAUSE: number;
      PAUSE_SMTP: number;
      PAUSE_DATA: number;
      DISCONNECTING: number;
      DISCONNECTED: number;
      [key: string]: number;
    };
  };
}
