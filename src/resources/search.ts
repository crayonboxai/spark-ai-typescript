// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search for products using a JSON request body. Use for complex filter
   * combinations.
   */
  create(body: SearchCreateParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }

  /**
   * Search for products using natural language. Supports filtering and pagination.
   */
  retrieve(query: SearchRetrieveParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.get('/v1/search', { query, ...options });
  }
}

/**
 * Common error response body for all API failures.
 *
 * Returned as JSON on 4xx/5xx or as part of fallback payloads. Clients should use
 * `code` for branching; `message` for display.
 */
export interface APIError {
  /**
   * Machine-readable error code (e.g. SEARCH_TIMEOUT)
   */
  code: string;

  /**
   * Human-readable error message
   */
  message: string;

  /**
   * Optional extra context (e.g. backend, timeout_seconds)
   */
  details?: { [key: string]: unknown } | null;

  /**
   * Request or trace ID for support/debugging
   */
  request_id?: string | null;
}

/**
 * Search response with product-level results.
 */
export interface SearchResponse {
  /**
   * Original search query
   */
  query: string;

  /**
   * Type of search performed
   */
  search_type: string;

  /**
   * Total matching unique products
   */
  total_results: number;

  /**
   * Product results
   */
  results?: Array<SearchResponse.Result>;

  /**
   * Search latency in milliseconds
   */
  took_ms?: number | null;

  /**
   * Common error response body for all API failures.
   *
   * Returned as JSON on 4xx/5xx or as part of fallback payloads. Clients should use
   * `code` for branching; `message` for display.
   */
  warning?: APIError | null;
}

export namespace SearchResponse {
  /**
   * Client-facing product result returned in the API response. One entry per unique
   * product, hydrated from the source database with lightweight product, vendor, and
   * category data.
   */
  export interface Result {
    /**
     * Product ID
     */
    _id: string;

    /**
     * Product name/title
     */
    name: string;

    /**
     * Combined relevance score (0-1)
     */
    relevance_score: number;

    /**
     * Product active status
     */
    active?: boolean;

    /**
     * Case/pack size
     */
    case_size?: number | null;

    /**
     * Minimal category info for search results.
     */
    category?: Result.Category | null;

    /**
     * Product description or subtitle
     */
    description?: string | null;

    /**
     * Formatted MRP with currency
     */
    formattedMrp?: string | null;

    /**
     * Formatted price with currency
     */
    formattedPrice?: string | null;

    /**
     * Stock availability
     */
    hasStock?: boolean;

    /**
     * Product image URL
     */
    images?: string | null;

    /**
     * Product image URL (alias)
     */
    img?: string | null;

    /**
     * Full-text search score
     */
    keyword_score?: number | null;

    /**
     * MRP/RRP price
     */
    mrp?: number | null;

    /**
     * Product price
     */
    price?: number | null;

    /**
     * Vector similarity score
     */
    semantic_score?: number | null;

    /**
     * Product SKU
     */
    sku?: string | null;

    /**
     * Product slug
     */
    slug?: string | null;

    /**
     * Product thumbnail URL
     */
    thumbnail?: string | null;

    /**
     * Slim vendor info returned in search results. Contains only fields needed by the
     * client.
     */
    vendor?: Result.Vendor | null;
  }

  export namespace Result {
    /**
     * Minimal category info for search results.
     */
    export interface Category {
      /**
       * Category ID
       */
      _id: string;

      /**
       * Category name
       */
      name: string;

      /**
       * Category image
       */
      img?: string | null;

      /**
       * Category link
       */
      link?: string | null;

      /**
       * Full category path
       */
      namePath?: string | null;

      /**
       * Category slug
       */
      slug?: string | null;
    }

    /**
     * Slim vendor info returned in search results. Contains only fields needed by the
     * client.
     */
    export interface Vendor {
      /**
       * Vendor ID
       */
      _id?: string | null;

      /**
       * Vendor business name
       */
      business_name?: string | null;

      /**
       * Vendor core values
       */
      core_values?: Array<string> | null;

      /**
       * Vendor country
       */
      country?: string | null;

      /**
       * Lead time in days
       */
      lead_time?: number | null;

      /**
       * Minimum order value
       */
      minimum_order_value?: number | null;

      /**
       * Vendor name
       */
      name?: string | null;

      /**
       * Selling on Amazon
       */
      selling_products_on_amazon?: boolean | null;

      /**
       * Vendor slug
       */
      slug?: string | null;

      /**
       * Year business established
       */
      year_established?: number | null;
    }
  }
}

export interface SearchCreateParams {
  /**
   * Natural language search query
   */
  query: string;

  /**
   * Filters to apply to search results.
   */
  filters?: SearchCreateParams.Filters | null;

  /**
   * Maximum results to return
   */
  limit?: number;

  /**
   * Minimum relevance score threshold (0-1)
   */
  min_score?: number;

  /**
   * Override neural reranking: true to enable, false to disable. If omitted, uses
   * NEURAL_RERANK_ENABLED from env.
   */
  neural_rerank?: boolean | null;

  /**
   * Offset for pagination
   */
  offset?: number;

  /**
   * Type of search to perform
   */
  search_type?: 'semantic' | 'keyword' | 'hybrid';
}

export namespace SearchCreateParams {
  /**
   * Filters to apply to search results.
   */
  export interface Filters {
    /**
     * Filter by category ID
     */
    category_id?: string | null;

    /**
     * Filter by multiple category IDs (OR logic)
     */
    category_ids?: Array<string> | null;

    /**
     * Filter by category slug
     */
    category_slug?: string | null;

    /**
     * Filter by vendor core values (OR, contains)
     */
    core_values?: Array<string> | null;

    /**
     * Filter by gender (OR logic)
     */
    genders?: Array<string> | null;

    /**
     * Filter by stock availability
     */
    in_stock?: boolean | null;

    /**
     * Maximum lead time in days
     */
    lead_time_max?: number | null;

    /**
     * Filter by manufacturing country (OR logic)
     */
    made_in?: Array<string> | null;

    /**
     * Maximum MOQ filter
     */
    moq_max?: number | null;

    /**
     * Maximum price filter
     */
    price_max?: number | null;

    /**
     * Minimum price filter
     */
    price_min?: number | null;

    /**
     * Sort order: price_asc, price_desc, popularity, newest, rating
     */
    sort_by?: string | null;

    /**
     * Source type filter: product, doc, faq, policy
     */
    source_type?: string | null;

    /**
     * Filter by product tag slugs (OR, contains)
     */
    tags?: Array<string> | null;

    /**
     * Filter by vendor country names (OR logic)
     */
    vendor_countries?: Array<string> | null;

    /**
     * Filter by vendor/seller ID
     */
    vendor_id?: string | null;

    /**
     * Filter by multiple vendor IDs (OR logic)
     */
    vendor_ids?: Array<string> | null;

    /**
     * Maximum vendor minimum order value filter
     */
    vendor_min_order_value_max?: number | null;

    /**
     * Filter by vendor name (partial match)
     */
    vendor_name?: string | null;

    /**
     * Minimum vendor rating (0-5)
     */
    vendor_rating_min?: number | null;
  }
}

export interface SearchRetrieveParams {
  /**
   * Natural language search query
   */
  q: string;

  /**
   * Filter by category ID
   */
  category_id?: string | null;

  /**
   * Filter by multiple category IDs (OR logic)
   */
  category_ids?: Array<string> | null;

  /**
   * Filter by category slug
   */
  category_slug?: string | null;

  /**
   * Filter by vendor core values (OR, contains)
   */
  core_values?: Array<string> | null;

  /**
   * Filter by gender (OR logic)
   */
  genders?: Array<string> | null;

  /**
   * Filter by stock availability (true = in stock only)
   */
  in_stock?: boolean | null;

  /**
   * Maximum lead time in days
   */
  lead_time_max?: number | null;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Filter by manufacturing country (OR logic)
   */
  made_in?: Array<string> | null;

  /**
   * Minimum relevance score threshold (0-1)
   */
  min_score?: number;

  /**
   * Maximum minimum order quantity filter
   */
  moq_max?: number | null;

  /**
   * Override neural reranking: true to enable, false to disable. If omitted, uses
   * env default.
   */
  neural_rerank?: boolean | null;

  /**
   * Number of results to skip for pagination
   */
  offset?: number;

  /**
   * Maximum price filter
   */
  price_max?: number | null;

  /**
   * Minimum price filter
   */
  price_min?: number | null;

  /**
   * Type of search: semantic (vector), keyword (full-text), or hybrid (both)
   */
  search_type?: 'semantic' | 'keyword' | 'hybrid';

  /**
   * Sort order: price_asc, price_desc, popularity, newest, rating
   */
  sort_by?: string | null;

  /**
   * Filter by product tag slugs (OR, contains)
   */
  tags?: Array<string> | null;

  /**
   * Filter by vendor country names (OR logic)
   */
  vendor_countries?: Array<string> | null;

  /**
   * Filter by vendor/seller ID
   */
  vendor_id?: string | null;

  /**
   * Filter by multiple vendor IDs (OR logic)
   */
  vendor_ids?: Array<string> | null;

  /**
   * Maximum vendor minimum order value filter
   */
  vendor_min_order_value_max?: number | null;

  /**
   * Filter by vendor name (partial match)
   */
  vendor_name?: string | null;

  /**
   * Minimum vendor rating (0-5)
   */
  vendor_rating_min?: number | null;
}

export declare namespace Search {
  export {
    type APIError as APIError,
    type SearchResponse as SearchResponse,
    type SearchCreateParams as SearchCreateParams,
    type SearchRetrieveParams as SearchRetrieveParams,
  };
}
