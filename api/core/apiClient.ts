import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  async get(endpoint: string) {
    return this.request.get(endpoint);
  }

  async post(endpoint: string, data: any) {
    return this.request.post(endpoint, {
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async put(endpoint: string, data: any) {
    return this.request.put(endpoint, { data });
  }

  async delete(endpoint: string) {
    return this.request.delete(endpoint);
  }
}