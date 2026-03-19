// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChildrenAPI from './children';
import { ChildListByNameParams, ChildListByNameResponse, ChildListResponse, Children } from './children';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  children: ChildrenAPI.Children = new ChildrenAPI.Children(this._client);

  /**
   * Get all categories.
   *
   * Returns a flat list of all categories in the system.
   */
  listAll(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/categories/all', options);
  }

  /**
   * Get top-level categories for browsing suggestions.
   *
   * Returns a list of root categories (level 0) that can be used for initial
   * category navigation.
   */
  listTop(
    query: CategoryListTopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get('/v1/categories/top', { query, ...options });
  }

  /**
   * Get products in a specific category.
   *
   * Returns eligible products filtered by category ID, with product details suitable
   * for display in a product grid.
   */
  retrieveProducts(
    categoryID: string,
    query: CategoryRetrieveProductsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/v1/categories/${categoryID}/products`, { query, ...options });
  }
}

export type CategoryListAllResponse = unknown;

export type CategoryListTopResponse = unknown;

export type CategoryRetrieveProductsResponse = unknown;

export interface CategoryListTopParams {
  /**
   * Number of categories
   */
  limit?: number;
}

export interface CategoryRetrieveProductsParams {
  /**
   * Maximum products to return
   */
  limit?: number;
}

Categories.Children = Children;

export declare namespace Categories {
  export {
    type CategoryListAllResponse as CategoryListAllResponse,
    type CategoryListTopResponse as CategoryListTopResponse,
    type CategoryRetrieveProductsResponse as CategoryRetrieveProductsResponse,
    type CategoryListTopParams as CategoryListTopParams,
    type CategoryRetrieveProductsParams as CategoryRetrieveProductsParams,
  };

  export {
    Children as Children,
    type ChildListResponse as ChildListResponse,
    type ChildListByNameResponse as ChildListByNameResponse,
    type ChildListByNameParams as ChildListByNameParams,
  };
}
