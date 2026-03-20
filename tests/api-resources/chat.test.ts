// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkAI from '@crayonboxai/spark-ai';

const client = new SparkAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Mock server tests are disabled
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.chat.createCompletion({
      messages: [{ content: 'content', role: 'system' }],
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
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.chat.createCompletion({
      messages: [
        {
          content: 'content',
          role: 'system',
          name: 'name',
        },
      ],
      category_id: 'category_id',
      include_citations: true,
      max_retrieval_candidates: 1,
      max_tokens: 1,
      stream: true,
      temperature: 0,
      vendor_id: 'vendor_id',
    });
  });
});
