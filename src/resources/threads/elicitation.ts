// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Elicitation extends APIResource {
  /**
   * Submit a response to an elicitation request and resume the run.
   */
  create(
    threadID: string,
    params: ElicitationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ElicitationResponse> {
    const { 'X-Api-Key': xAPIKey, ...body } = params;
    return this._client.post(path`/threads/${threadID}/elicitation`, {
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
 * Response after submitting elicitation.
 */
export interface ElicitationResponse {
  /**
   * Response status
   */
  status: string;

  /**
   * Thread ID
   */
  threadId: string;

  /**
   * New run ID if resumed
   */
  runId?: string | null;
}

/**
 * Request to submit an elicitation response.
 */
export interface ElicitationResponseRequest {
  /**
   * Elicitation ID being responded to
   */
  elicitationId: string;

  /**
   * User's response data
   */
  response: { [key: string]: unknown };

  /**
   * User key for auth
   */
  userKey?: string | null;
}

export interface ElicitationCreateParams {
  /**
   * Body param: Elicitation ID being responded to
   */
  elicitationId: string;

  /**
   * Body param: User's response data
   */
  response: { [key: string]: unknown };

  /**
   * Body param: User key for auth
   */
  userKey?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export declare namespace Elicitation {
  export {
    type ElicitationResponse as ElicitationResponse,
    type ElicitationResponseRequest as ElicitationResponseRequest,
    type ElicitationCreateParams as ElicitationCreateParams,
  };
}
