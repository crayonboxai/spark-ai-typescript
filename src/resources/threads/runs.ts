// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ThreadsAPI from './threads';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Start a run on an existing thread. Returns SSE stream.
   */
  create(threadID: string, params: RunCreateParams, options?: RequestOptions): APIPromise<unknown> {
    const { 'X-Api-Key': xAPIKey, ...body } = params;
    return this._client.post(path`/threads/${threadID}/runs`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Cancel an active run.
   */
  delete(runID: string, params: RunDeleteParams, options?: RequestOptions): APIPromise<CancelRun> {
    const { thread_id, reason, 'X-Api-Key': xAPIKey } = params;
    return this._client.delete(path`/threads/${thread_id}/runs/${runID}`, {
      query: { reason },
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Response for cancelling a run.
 */
export interface CancelRun {
  /**
   * Cancelled run ID
   */
  runId: string;

  /**
   * Run status
   */
  status?: 'cancelled';
}

/**
 * Component definition for run requests.
 */
export interface ComponentDef {
  /**
   * Component description
   */
  description: string;

  /**
   * Component name
   */
  name: string;

  /**
   * JSON Schema for props
   */
  propsSchema?: { [key: string]: unknown } | null;

  /**
   * JSON Schema for state
   */
  stateSchema?: { [key: string]: unknown } | null;
}

/**
 * Request to create a run on an existing thread.
 */
export interface CreateRun {
  /**
   * User message to process
   */
  message: InputMessage;

  /**
   * Available UI components
   */
  availableComponents?: Array<ComponentDef> | null;

  /**
   * Max agent loop iterations (default 10)
   */
  maxSteps?: number | null;

  /**
   * Max tokens for response
   */
  maxTokens?: number | null;

  /**
   * Model to use (overrides default)
   */
  model?: string | null;

  /**
   * Previous run ID for context
   */
  previousRunId?: string | null;

  /**
   * Metadata for the run
   */
  runMetadata?: { [key: string]: unknown } | null;

  /**
   * Temperature for sampling
   */
  temperature?: number | null;

  /**
   * Tool choice: 'auto', 'none', 'required', or {name}
   */
  toolChoice?: string | { [key: string]: string } | null;

  /**
   * Available tools
   */
  tools?: Array<ToolDef> | null;

  /**
   * User key for auth
   */
  userKey?: string | null;
}

/**
 * Request to create a thread and start a run.
 */
export interface CreateThreadAndRun {
  /**
   * User message to process
   */
  message: InputMessage;

  /**
   * Available UI components
   */
  availableComponents?: Array<ComponentDef> | null;

  /**
   * Max agent loop iterations (default 10)
   */
  maxSteps?: number | null;

  /**
   * Max tokens for response
   */
  maxTokens?: number | null;

  /**
   * Model to use (overrides default)
   */
  model?: string | null;

  /**
   * Previous run ID for context
   */
  previousRunId?: string | null;

  /**
   * Metadata for the run
   */
  runMetadata?: { [key: string]: unknown } | null;

  /**
   * Temperature for sampling
   */
  temperature?: number | null;

  /**
   * Request to create a new thread.
   */
  thread?: ThreadsAPI.CreateThread | null;

  /**
   * Thread metadata (shorthand)
   */
  threadMetadata?: { [key: string]: unknown } | null;

  /**
   * Tool choice: 'auto', 'none', 'required', or {name}
   */
  toolChoice?: string | { [key: string]: string } | null;

  /**
   * Available tools
   */
  tools?: Array<ToolDef> | null;

  /**
   * User key for auth
   */
  userKey?: string | null;
}

/**
 * Input message for creating a run.
 */
export interface InputMessage {
  /**
   * Message content (string or content blocks)
   */
  content: string | Array<{ [key: string]: unknown }>;

  /**
   * Message role
   */
  role?: 'user' | 'assistant' | 'system' | 'tool';
}

/**
 * Tool definition for run requests.
 *
 * Follows OpenAI/Anthropic/MCP conventions.
 */
export interface ToolDef {
  /**
   * Description of what the tool does
   */
  description: string;

  /**
   * Tool name (a-z, A-Z, 0-9, \_, -)
   */
  name: string;

  /**
   * JSON Schema for the tool's input parameters
   */
  inputSchema?: { [key: string]: unknown };

  /**
   * Per-tool call limit
   */
  maxCalls?: number | null;

  /**
   * Optional JSON Schema for structured output
   */
  outputSchema?: { [key: string]: unknown } | null;

  /**
   * Enable strict schema validation (OpenAI feature)
   */
  strict?: boolean | null;
}

export type RunCreateResponse = unknown;

export interface RunCreateParams {
  /**
   * Body param: User message to process
   */
  message: InputMessage;

  /**
   * Body param: Available UI components
   */
  availableComponents?: Array<ComponentDef> | null;

  /**
   * Body param: Max agent loop iterations (default 10)
   */
  maxSteps?: number | null;

  /**
   * Body param: Max tokens for response
   */
  maxTokens?: number | null;

  /**
   * Body param: Model to use (overrides default)
   */
  model?: string | null;

  /**
   * Body param: Previous run ID for context
   */
  previousRunId?: string | null;

  /**
   * Body param: Metadata for the run
   */
  runMetadata?: { [key: string]: unknown } | null;

  /**
   * Body param: Temperature for sampling
   */
  temperature?: number | null;

  /**
   * Body param: Tool choice: 'auto', 'none', 'required', or {name}
   */
  toolChoice?: string | { [key: string]: string } | null;

  /**
   * Body param: Available tools
   */
  tools?: Array<ToolDef> | null;

  /**
   * Body param: User key for auth
   */
  userKey?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export interface RunDeleteParams {
  /**
   * Path param
   */
  thread_id: string;

  /**
   * Query param
   */
  reason?: 'user_cancelled' | 'connection_closed';

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export declare namespace Runs {
  export {
    type CancelRun as CancelRun,
    type ComponentDef as ComponentDef,
    type CreateRun as CreateRun,
    type CreateThreadAndRun as CreateThreadAndRun,
    type InputMessage as InputMessage,
    type ToolDef as ToolDef,
    type RunCreateResponse as RunCreateResponse,
    type RunCreateParams as RunCreateParams,
    type RunDeleteParams as RunDeleteParams,
  };
}
