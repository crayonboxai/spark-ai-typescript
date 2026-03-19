// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SuggestionsAPI from './suggestions';
import {
  GenerateSuggestions,
  SuggestionCreateParams,
  SuggestionList,
  SuggestionListParams,
  Suggestions,
} from './suggestions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  suggestions: SuggestionsAPI.Suggestions = new SuggestionsAPI.Suggestions(this._client);

  /**
   * Get a single message by ID.
   */
  retrieve(
    messageID: string,
    params: MessageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MessageDto> {
    const { thread_id, 'X-Api-Key': xAPIKey, ...query } = params;
    return this._client.get(path`/threads/${thread_id}/messages/${messageID}`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List messages in a thread with cursor pagination.
   */
  list(
    threadID: string,
    params: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageList> {
    const { 'X-Api-Key': xAPIKey, ...query } = params ?? {};
    return this._client.get(path`/threads/${threadID}/messages`, {
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
 * Message DTO matching V1 contract.
 */
export interface MessageDto {
  /**
   * Message ID (msg_xxx format)
   */
  id: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Message role
   */
  role: 'user' | 'assistant' | 'system' | 'tool';

  /**
   * Content blocks
   */
  content?: Array<{ [key: string]: unknown }>;

  /**
   * Whether cancelled
   */
  isCancelled?: boolean;

  /**
   * Message metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * Parent message ID for branching
   */
  parentMessageId?: string | null;
}

/**
 * Response for listing messages.
 */
export interface MessageList {
  /**
   * Whether more pages exist
   */
  hasMore?: boolean;

  /**
   * Message list
   */
  messages?: Array<MessageDto>;

  /**
   * Cursor for next page
   */
  nextCursor?: string | null;
}

export interface MessageRetrieveParams {
  /**
   * Path param
   */
  thread_id: string;

  /**
   * Query param
   */
  userKey?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export interface MessageListParams {
  /**
   * Query param
   */
  cursor?: string | null;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  order?: string;

  /**
   * Query param
   */
  userKey?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

Messages.Suggestions = Suggestions;

export declare namespace Messages {
  export {
    type MessageDto as MessageDto,
    type MessageList as MessageList,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
  };

  export {
    Suggestions as Suggestions,
    type GenerateSuggestions as GenerateSuggestions,
    type SuggestionList as SuggestionList,
    type SuggestionCreateParams as SuggestionCreateParams,
    type SuggestionListParams as SuggestionListParams,
  };
}
