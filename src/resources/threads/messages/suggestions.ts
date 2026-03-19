// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from '../runs';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Suggestions extends APIResource {
  /**
   * Generate new suggestions for a message (replaces existing).
   */
  create(
    messageID: string,
    params: SuggestionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SuggestionList> {
    const { thread_id, 'X-Api-Key': xAPIKey, ...body } = params;
    return this._client.post(path`/threads/${thread_id}/messages/${messageID}/suggestions`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List suggestions for a message.
   */
  list(
    messageID: string,
    params: SuggestionListParams,
    options?: RequestOptions,
  ): APIPromise<SuggestionList> {
    const { thread_id, 'X-Api-Key': xAPIKey, ...query } = params;
    return this._client.get(path`/threads/${thread_id}/messages/${messageID}/suggestions`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Request to generate suggestions for a message.
 */
export interface GenerateSuggestions {
  /**
   * Available UI components for context
   */
  availableComponents?: Array<RunsAPI.ComponentDef> | null;

  /**
   * Max suggestions to generate
   */
  maxSuggestions?: number;
}

/**
 * Response for listing suggestions.
 */
export interface SuggestionList {
  /**
   * Whether more pages exist
   */
  hasMore?: boolean;

  /**
   * Cursor for next page
   */
  nextCursor?: string | null;

  /**
   * Suggestion list
   */
  suggestions?: Array<SuggestionList.Suggestion>;
}

export namespace SuggestionList {
  /**
   * Suggestion DTO for follow-up suggestions.
   */
  export interface Suggestion {
    /**
     * Suggestion ID
     */
    id: string;

    /**
     * Creation timestamp
     */
    createdAt: string;

    /**
     * Parent message ID
     */
    messageId: string;

    /**
     * Suggestion title/text
     */
    title: string;

    /**
     * Suggestion description
     */
    description?: string | null;
  }
}

export interface SuggestionCreateParams {
  /**
   * Path param
   */
  thread_id: string;

  /**
   * Body param: Available UI components for context
   */
  availableComponents?: Array<RunsAPI.ComponentDef> | null;

  /**
   * Body param: Max suggestions to generate
   */
  maxSuggestions?: number;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export interface SuggestionListParams {
  /**
   * Path param
   */
  thread_id: string;

  /**
   * Query param
   */
  cursor?: string | null;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export declare namespace Suggestions {
  export {
    type GenerateSuggestions as GenerateSuggestions,
    type SuggestionList as SuggestionList,
    type SuggestionCreateParams as SuggestionCreateParams,
    type SuggestionListParams as SuggestionListParams,
  };
}
