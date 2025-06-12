# estfor-api-wrapper

A TypeScript wrapper for the Estfor Kingdom API.

## Installation

```sh
npm install estfor-api-wrapper
```

## Usage

```ts
import { EstforApiClient } from 'estfor-api-wrapper';

const api = new EstforApiClient({ baseUrl: 'http://localhost:4004' });

// Example: Get all actions
const actions = await api.getActions();
console.log(actions);
```

> **Note:** In Node.js environments, you must provide a global `fetch` implementation (e.g., using [`node-fetch`](https://www.npmjs.com/package/node-fetch) or [`undici`](https://www.npmjs.com/package/undici)).

## API Coverage

This library provides typed methods for all endpoints in the Estfor API.

## License

MIT 