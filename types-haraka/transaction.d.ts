declare module 'haraka/transaction' {
  import { Connection } from 'haraka/connection';
  import { Notes } from 'haraka-notes';

  export class Transaction {
    connection: Connection;
    notes: Notes;
    // TODO: Add other properties and methods
  }
}
declare module 'Haraka/transaction' {
  export * from 'haraka/transaction';
}
