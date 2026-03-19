// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkAI from 'spark-ai';

const client = new SparkAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource state', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.threads.components.state.create('component_id', {
      thread_id: 'thread_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.threads.components.state.create('component_id', {
      thread_id: 'thread_id',
      patch: [
        {
          op: 'add',
          path: 'path',
          from: 'from',
          value: {},
        },
      ],
      state: { foo: 'bar' },
      userKey: 'userKey',
      'X-Api-Key': 'X-Api-Key',
    });
  });
});
