// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SparkAI } from '../client';

export abstract class APIResource {
  protected _client: SparkAI;

  constructor(client: SparkAI) {
    this._client = client;
  }
}
