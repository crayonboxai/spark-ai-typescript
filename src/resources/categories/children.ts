// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Children extends APIResource {
  /**
   * Get child categories of a parent category.
   *
   * Returns subcategories with full details and parent category info for navigation.
   */
  list(categoryID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/v1/categories/${categoryID}/children`, options);
  }

  /**
   * Get child categories by parent category name.
   *
   * Looks up the category ID by name (case-insensitive), then returns subcategories
   * with full details for navigation.
   */
  listByName(query: ChildListByNameParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/categories/children', { query, ...options });
  }
}

export type ChildListResponse = unknown;

export type ChildListByNameResponse = unknown;

export interface ChildListByNameParams {
  /**
   * Category name to look up
   */
  name: string;
}

export declare namespace Children {
  export {
    type ChildListResponse as ChildListResponse,
    type ChildListByNameResponse as ChildListByNameResponse,
    type ChildListByNameParams as ChildListByNameParams,
  };
}
