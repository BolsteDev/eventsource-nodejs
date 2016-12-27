# eventsource-nodejs

A client and server to test EventSource on different browsers.

This is simply a test repo for verifying that event polling works and that the polyfill implementations work correctly.

The polyfill we settled on correctly calls `onmessage` for initial payloads and sequential payloads. Other polyfills we checked
did not correctly handle initial payloads.
