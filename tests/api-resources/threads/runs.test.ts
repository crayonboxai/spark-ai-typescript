// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkAI from '@crayonboxai/spark-ai';

const client = new SparkAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.threads.runs.create('thread_id', { message: { content: 'string' } });
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
    const response = await client.threads.runs.create('thread_id', {
      message: { content: 'string', role: 'user' },
      availableComponents: [
        {
          description: 'description',
          name: 'name',
          propsSchema: { foo: 'bar' },
          stateSchema: { foo: 'bar' },
        },
      ],
      maxSteps: 0,
      maxTokens: 0,
      model: 'model',
      previousRunId: 'previousRunId',
      runMetadata: { foo: 'bar' },
      temperature: 0,
      toolChoice: 'string',
      tools: [
        {
          description: 'description',
          name: 'name',
          inputSchema: { foo: 'bar' },
          maxCalls: 1,
          outputSchema: { foo: 'bar' },
          strict: true,
        },
      ],
      userKey: 'userKey',
      'X-Api-Key': 'X-Api-Key',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.threads.runs.delete('run_id', { thread_id: 'thread_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.threads.runs.delete('run_id', {
      thread_id: 'thread_id',
      reason: 'user_cancelled',
      'X-Api-Key': 'X-Api-Key',
    });
  });
});
