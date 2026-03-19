// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkAI from 'spark-ai';

const client = new SparkAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.threads.messages.retrieve('message_id', { thread_id: 'thread_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.threads.messages.retrieve('message_id', {
      thread_id: 'thread_id',
      userKey: 'userKey',
      'X-Api-Key': 'X-Api-Key',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.threads.messages.list('thread_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.threads.messages.list(
        'thread_id',
        {
          cursor: 'cursor',
          limit: 1,
          order: 'desc',
          userKey: 'userKey',
          'X-Api-Key': 'X-Api-Key',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SparkAI.NotFoundError);
  });
});
