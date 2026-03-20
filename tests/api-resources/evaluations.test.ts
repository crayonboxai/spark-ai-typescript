// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkAI from '@crayonboxai/spark-ai';

const client = new SparkAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluations', () => {
  // Mock server tests are disabled
  test.skip('record: only required params', async () => {
    const responsePromise = client.evaluations.record({
      evaluator_name: 'x',
      first_result_rank: 1,
      query: 'x',
      relevance: 1,
      speed: 1,
      took_ms: 0,
      variation: 1,
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
  test.skip('record: required and optional params', async () => {
    const response = await client.evaluations.record({
      evaluator_name: 'x',
      first_result_rank: 1,
      query: 'x',
      relevance: 1,
      speed: 1,
      took_ms: 0,
      variation: 1,
      neural_on: true,
      not_relevant_products: ['string'],
      query_id: 'query_id',
    });
  });
});
