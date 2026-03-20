// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkAI from '@crayonboxai/spark-ai';

const client = new SparkAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.search.create({ query: 'x' });
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
    const response = await client.search.create({
      query: 'x',
      filters: {
        category_id: 'category_id',
        category_ids: ['string'],
        category_slug: 'category_slug',
        core_values: ['string'],
        genders: ['string'],
        in_stock: true,
        lead_time_max: 0,
        made_in: ['string'],
        moq_max: 0,
        price_max: 0,
        price_min: 0,
        sort_by: 'sort_by',
        source_type: 'source_type',
        tags: ['string'],
        vendor_countries: ['string'],
        vendor_id: 'vendor_id',
        vendor_ids: ['string'],
        vendor_min_order_value_max: 0,
        vendor_name: 'vendor_name',
        vendor_rating_min: 0,
      },
      limit: 1,
      min_score: 0,
      neural_rerank: true,
      offset: 0,
      search_type: 'semantic',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.search.retrieve({ q: 'organic coffee' });
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
    const response = await client.search.retrieve({
      q: 'organic coffee',
      category_id: 'category_id',
      category_ids: ['string'],
      category_slug: 'category_slug',
      core_values: ['string'],
      genders: ['string'],
      in_stock: true,
      lead_time_max: 0,
      limit: 1,
      made_in: ['string'],
      min_score: 0,
      moq_max: 0,
      neural_rerank: true,
      offset: 0,
      price_max: 0,
      price_min: 0,
      search_type: 'semantic',
      sort_by: 'sort_by',
      tags: ['string'],
      vendor_countries: ['string'],
      vendor_id: 'vendor_id',
      vendor_ids: ['string'],
      vendor_min_order_value_max: 0,
      vendor_name: 'vendor_name',
      vendor_rating_min: 0,
    });
  });
});
