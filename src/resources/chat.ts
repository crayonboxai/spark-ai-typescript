// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ChatAPI from './chat';
import * as SearchAPI from './search';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Chat extends APIResource {
  /**
   * Generate a conversational response with product context using RAG.
   */
  createCompletion(
    body: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatCreateCompletionResponse> {
    return this._client.post('/v1/chat/completions', { body, ...options });
  }
}

/**
 * Individual chat message in a conversation.
 */
export interface ChatMessage {
  /**
   * Message content
   */
  content: string;

  /**
   * Message role: system (instructions), user (query), assistant (response)
   */
  role: 'system' | 'user' | 'assistant';

  /**
   * Optional name for the message author
   */
  name?: string | null;
}

/**
 * OpenAI-compatible chat completion response with product citations.
 *
 * Extends standard response with:
 *
 * - citations: Products referenced in the answer (hydrated with images, vendor,
 *   etc.)
 */
export interface ChatCreateCompletionResponse {
  /**
   * Unique completion ID
   */
  id: string;

  /**
   * Completion choices
   */
  choices: Array<ChatCreateCompletionResponse.Choice>;

  /**
   * Model used for completion
   */
  model: string;

  /**
   * Products referenced in the response
   */
  citations?: Array<ChatCreateCompletionResponse.Citation>;

  /**
   * Unix timestamp of creation
   */
  created?: number | null;

  /**
   * Object type
   */
  object?: string;

  /**
   * Token usage statistics
   */
  usage?: ChatCreateCompletionResponse.Usage;

  /**
   * Common error response body for all API failures.
   *
   * Returned as JSON on 4xx/5xx or as part of fallback payloads. Clients should use
   * `code` for branching; `message` for display.
   */
  warning?: SearchAPI.APIError | null;
}

export namespace ChatCreateCompletionResponse {
  /**
   * Individual completion choice.
   */
  export interface Choice {
    /**
     * Generated message
     */
    message: ChatAPI.ChatMessage;

    /**
     * Reason for completion termination
     */
    finish_reason?: 'stop' | 'length' | 'content_filter';

    /**
     * Choice index
     */
    index?: number;
  }

  /**
   * Product citation in a chat response.
   *
   * Links the LLM's answer back to source products for transparency. Includes
   * hydrated product data for rich frontend display.
   */
  export interface Citation {
    /**
     * Relevance to the query
     */
    relevance_score: number;

    /**
     * Product ID from source system
     */
    source_id: string;

    /**
     * Product title
     */
    title: string;

    /**
     * Product category
     */
    category_name?: string | null;

    /**
     * Relevant excerpt from product description
     */
    excerpt?: string | null;

    /**
     * Primary product image URL
     */
    image_url?: string | null;

    /**
     * Stock availability
     */
    in_stock?: boolean | null;

    /**
     * Product price
     */
    price?: number | null;

    /**
     * Product price in EUR
     */
    price_eur?: number | null;

    /**
     * Product URL on Sparkinity
     */
    url?: string | null;

    /**
     * Vendor/brand name
     */
    vendor_name?: string | null;
  }

  /**
   * Token usage statistics
   */
  export interface Usage {
    /**
     * Tokens in completion
     */
    completion_tokens?: number;

    /**
     * Tokens in prompt (including context)
     */
    prompt_tokens?: number;

    /**
     * Total tokens used
     */
    total_tokens?: number;
  }
}

export interface ChatCreateCompletionParams {
  /**
   * Conversation messages (at least one user message required)
   */
  messages: Array<ChatMessage>;

  /**
   * Scope retrieval to specific category
   */
  category_id?: string | null;

  /**
   * Include product citations in response
   */
  include_citations?: boolean;

  /**
   * Maximum products to retrieve for context
   */
  max_retrieval_candidates?: number;

  /**
   * Maximum tokens in response
   */
  max_tokens?: number | null;

  /**
   * Enable streaming response via SSE
   */
  stream?: boolean;

  /**
   * Sampling temperature (0=deterministic, 2=creative)
   */
  temperature?: number;

  /**
   * Scope retrieval to specific vendor/seller
   */
  vendor_id?: string | null;
}

export declare namespace Chat {
  export {
    type ChatMessage as ChatMessage,
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
