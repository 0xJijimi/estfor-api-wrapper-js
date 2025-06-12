import type { Action } from './types';

// Remove fetch polyfill for Node.js. Document in README that users must provide fetch in Node.js environments.

export interface EstforApiClientOptions {
  baseUrl?: string;
}

/**
 * EstforApiClient provides typed methods for interacting with the Estfor Kingdom API.
 *
 * Example:
 *   const api = new EstforApiClient({ baseUrl: 'http://localhost:4004' });
 *   const actions = await api.getActions();
 */
export class EstforApiClient {
  private baseUrl: string;

  constructor(options: EstforApiClientOptions = {}) {
    this.baseUrl = options.baseUrl || 'http://localhost:4004';
  }

  // Example method stub
  async getActions(): Promise<Action[]> {
    const res = await fetch(`${this.baseUrl}/actions/`);
    if (!res.ok) throw new Error(`Failed to fetch actions: ${res.status}`);
    return res.json();
  }

  // TODO: Implement additional endpoint methods for the Estfor API
  // Add error handling and parameter support as needed
} 