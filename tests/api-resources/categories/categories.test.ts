// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkAI from 'spark-ai';

const client = new SparkAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource categories', () => {
  // Mock server tests are disabled
  test.skip('listAll', async () => {
    const responsePromise = client.categories.listAll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listTop', async () => {
    const responsePromise = client.categories.listTop();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listTop: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.categories.listTop({ limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SparkAI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveProducts', async () => {
    const responsePromise = client.categories.retrieveProducts('category_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveProducts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.categories.retrieveProducts('category_id', { limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SparkAI.NotFoundError);
  });
});
