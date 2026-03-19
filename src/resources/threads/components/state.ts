// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class State extends APIResource {
  /**
   * Update component state (full replace or JSON Patch).
   */
  create(
    componentID: string,
    params: StateCreateParams,
    options?: RequestOptions,
  ): APIPromise<ComponentState> {
    const { thread_id, 'X-Api-Key': xAPIKey, ...body } = params;
    return this._client.post(path`/threads/${thread_id}/components/${componentID}/state`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Response for component state update (matches Tambo contract).
 */
export interface ComponentState {
  /**
   * New complete state
   */
  state: { [key: string]: unknown };
}

/**
 * Request to update component state.
 */
export interface UpdateComponentState {
  /**
   * JSON Patch operations
   */
  patch?: Array<UpdateComponentState.Patch> | null;

  /**
   * Full state replacement
   */
  state?: { [key: string]: unknown } | null;

  /**
   * User key for auth
   */
  userKey?: string | null;
}

export namespace UpdateComponentState {
  /**
   * JSON Patch operation.
   */
  export interface Patch {
    /**
     * Operation type
     */
    op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

    /**
     * JSON Pointer path
     */
    path: string;

    /**
     * Source path for move/copy
     */
    from?: string | null;

    /**
     * Value for add/replace/test
     */
    value?: unknown;
  }
}

export interface StateCreateParams {
  /**
   * Path param
   */
  thread_id: string;

  /**
   * Body param: JSON Patch operations
   */
  patch?: Array<StateCreateParams.Patch> | null;

  /**
   * Body param: Full state replacement
   */
  state?: { [key: string]: unknown } | null;

  /**
   * Body param: User key for auth
   */
  userKey?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export namespace StateCreateParams {
  /**
   * JSON Patch operation.
   */
  export interface Patch {
    /**
     * Operation type
     */
    op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

    /**
     * JSON Pointer path
     */
    path: string;

    /**
     * Source path for move/copy
     */
    from?: string | null;

    /**
     * Value for add/replace/test
     */
    value?: unknown;
  }
}

export declare namespace State {
  export {
    type ComponentState as ComponentState,
    type UpdateComponentState as UpdateComponentState,
    type StateCreateParams as StateCreateParams,
  };
}
