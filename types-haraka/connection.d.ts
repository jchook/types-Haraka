declare module 'haraka/connection' {
  import { Notes } from 'haraka-notes';
  import { Results } from 'haraka-results';

  export class Connection {
    notes: Notes;
    results: Results;
    // TODO: Add other properties and methods
  }
}
declare module 'Haraka/connection' {
  export * from 'haraka/connection';
}
