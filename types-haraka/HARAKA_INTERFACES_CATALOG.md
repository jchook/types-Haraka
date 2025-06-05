# Haraka Interfaces Catalog

## Core Modules
- **outbound.js**
  - File path: Haraka/outbound.js
  - Key exports: Outbound mail queueing and delivery logic
  - Usage patterns: Used for handling outbound SMTP transactions
  - Dependencies: config, results, net_utils, address-rfc2821, ipaddr.js
- **server.js**
  - File path: Haraka/server.js
  - Key exports: Main server logic, connection handling
  - Usage patterns: Entry point for Haraka, manages lifecycle and plugin loading
  - Dependencies: plugins, config, logger, connection
- **connection.js**
  - File path: Haraka/connection.js
  - Key exports: Connection object, state, and methods
  - Usage patterns: Represents a client SMTP connection, passed to plugin hooks
  - Dependencies: transaction, results, notes, net_utils
- **plugins.js**
  - File path: Haraka/plugins.js
  - Key exports: Plugin loader, hook registration
  - Usage patterns: Loads and manages plugins, registers hooks
  - Dependencies: config, logger
- **config.js**
  - File path: Haraka/config.js
  - Key exports: Configuration loader and cache
  - Usage patterns: Loads config files, provides config values to core and plugins
  - Dependencies: fs, path
- **transaction.js**
  - File path: Haraka/transaction.js
  - Key exports: Transaction object, state, and methods
  - Usage patterns: Represents a single SMTP transaction, passed to plugin hooks
  - Dependencies: results, notes

## Plugin Hooks
Refer to the [Haraka Plugin Hooks documentation](https://haraka.github.io/core/Plugins) for a full list. Key hooks include:
- **init_master**: No parameters
- **init_child**: No parameters
- **init_http**: (next, Server)
- **init_wss**: (next, Server)
- **connect_init**: (next, connection)
- **lookup_rdns**: (next, connection)
- **connect**: (next, connection)
- **capabilities**: (next, connection)
- **unrecognized_command**: (next, connection, command)
- **disconnect**: (next, connection)
- **helo/ehlo**: (next, connection, hostname)
- **mail**: (next, connection, params)
- **rcpt**: (next, connection, params)
- **rcpt_ok**: (next, connection, params)
- **data**: (next, connection)
- **data_post**: (next, connection)
- **max_data_exceeded**: (next, connection)
- **queue**: (next, connection)
- **queue_outbound**: (next, connection)
- **queue_ok**: (next, connection)
- **reset_transaction**: (next, connection)
- **deny**: (next, connection)
- **get_mx**: (next, hmail, domain)
- **deferred**: (next, hmail, params)
- **bounce**: (next, hmail, err)
- **delivered**: (next, hmail, ...)
- **send_email**: (next, hmail)
- **pre_send_trans_email**: (next, fake_connection)

For each hook, parameters and return values should be documented as type definitions are developed.

## Dependencies
- **haraka-constants**
  - Key interfaces: SMTP return codes, plugin constants
  - Integration points: Used throughout core and plugins for status codes
- **haraka-utils**
  - Key interfaces: Utility functions for string, object, and array manipulation
  - Integration points: Used in core and plugins for common operations
- **haraka-notes**
  - Key interfaces: Notes objects for server, connection, and transaction
  - Integration points: Used to share state between plugins and core
- **haraka-net-utils**
  - Key interfaces: Network utility functions (IP checks, DNS, etc.)
  - Integration points: Used in connection handling and validation
- **haraka-results**
  - Key interfaces: Results object for plugin communication
  - Integration points: Used to store and retrieve plugin results
- **address-rfc2821**
  - Key interfaces: Email address parsing and validation
  - Integration points: Used in mail/rcpt hooks and address handling
- **ipaddr.js**
  - Key interfaces: IP address parsing and manipulation
  - Integration points: Used in connection and network validation

## Dependency Graph
- server.js
  - loads plugins.js
  - manages connections (connection.js)
  - uses config.js
- connection.js
  - uses transaction.js, results, notes, net_utils
- plugins.js
  - loads plugins, registers hooks
- transaction.js
  - uses results, notes
- outbound.js
  - uses config, results, net_utils, address-rfc2821, ipaddr.js

## Prioritization
- Focus first on interfaces and modules most frequently used in plugin development:
  - connection, transaction, plugins, results, notes
  - All plugin hook signatures and their parameters
  - Common utility and constants modules

---

This document will be expanded as more interfaces and usage patterns are discovered during type definition.
