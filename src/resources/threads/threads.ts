// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ElicitationAPI from './elicitation';
import {
  Elicitation,
  ElicitationCreateParams,
  ElicitationResponse,
  ElicitationResponseRequest,
} from './elicitation';
import * as GenerateNameAPI from './generate-name';
import { GenerateName, GenerateNameGenerateNameParams } from './generate-name';
import * as RunsAPI from './runs';
import {
  CancelRun,
  ComponentDef,
  CreateRun,
  CreateThreadAndRun,
  InputMessage,
  RunCreateParams,
  RunCreateResponse,
  RunDeleteParams,
  Runs,
  ToolDef,
} from './runs';
import * as ComponentsAPI from './components/components';
import { Components } from './components/components';
import * as MessagesAPI from './messages/messages';
import {
  MessageDto,
  MessageList,
  MessageListParams,
  MessageRetrieveParams,
  Messages,
} from './messages/messages';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Threads extends APIResource {
  generateName: GenerateNameAPI.GenerateName = new GenerateNameAPI.GenerateName(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  components: ComponentsAPI.Components = new ComponentsAPI.Components(this._client);
  elicitation: ElicitationAPI.Elicitation = new ElicitationAPI.Elicitation(this._client);

  /**
   * Create a new thread with optional initial messages.
   */
  create(params: ThreadCreateParams, options?: RequestOptions): APIPromise<ThreadWithMessages> {
    const { 'X-Api-Key': xAPIKey, ...body } = params;
    return this._client.post('/threads', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get a thread by ID with its messages.
   */
  retrieve(
    threadID: string,
    params: ThreadRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadWithMessages> {
    const { 'X-Api-Key': xAPIKey, ...query } = params ?? {};
    return this._client.get(path`/threads/${threadID}`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Update a thread's name and/or metadata.
   */
  update(threadID: string, params: ThreadUpdateParams, options?: RequestOptions): APIPromise<ThreadDto> {
    const { 'X-Api-Key': xAPIKey, ...body } = params;
    return this._client.patch(path`/threads/${threadID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List threads with userKey filter and cursor pagination.
   */
  list(params: ThreadListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ThreadList> {
    const { 'X-Api-Key': xAPIKey, ...query } = params ?? {};
    return this._client.get('/threads', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete a thread and all its messages and runs.
   */
  delete(
    threadID: string,
    params: ThreadDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Api-Key': xAPIKey } = params ?? {};
    return this._client.delete(path`/threads/${threadID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Request to create a new thread.
 */
export interface CreateThread {
  /**
   * Initial messages to add
   */
  initialMessages?: Array<RunsAPI.InputMessage>;

  /**
   * Thread metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * User key for scoping
   */
  userKey?: string | null;
}

/**
 * Error information for a failed run.
 */
export interface RunError {
  /**
   * Error code (e.g., INTERNAL_ERROR)
   */
  code: string;

  /**
   * Error message
   */
  message: string;
}

/**
 * Thread DTO matching V1 contract.
 */
export interface ThreadDto {
  /**
   * Thread ID (thr_xxx format)
   */
  id: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Current run ID if active
   */
  currentRunId?: string | null;

  /**
   * Last successfully completed run ID
   */
  lastCompletedRunId?: string | null;

  /**
   * Whether last run was cancelled
   */
  lastRunCancelled?: boolean;

  /**
   * Error information for a failed run.
   */
  lastRunError?: RunError | null;

  /**
   * Thread metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * Thread name
   */
  name?: string | null;

  /**
   * Pending client tool call IDs
   */
  pendingToolCallIds?: Array<string>;

  /**
   * Current run status
   */
  runStatus?: 'idle' | 'waiting' | 'streaming';

  /**
   * Current status message for the thread
   */
  statusMessage?: string | null;

  /**
   * User key for scoping
   */
  userKey?: string | null;
}

/**
 * Response for listing threads.
 */
export interface ThreadList {
  /**
   * Whether more pages exist
   */
  hasMore?: boolean;

  /**
   * Cursor for next page
   */
  nextCursor?: string | null;

  /**
   * Thread list
   */
  threads?: Array<ThreadDto>;
}

/**
 * Thread DTO with messages included.
 */
export interface ThreadWithMessages {
  /**
   * Thread ID (thr_xxx format)
   */
  id: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Current run ID if active
   */
  currentRunId?: string | null;

  /**
   * Last successfully completed run ID
   */
  lastCompletedRunId?: string | null;

  /**
   * Whether last run was cancelled
   */
  lastRunCancelled?: boolean;

  /**
   * Error information for a failed run.
   */
  lastRunError?: RunError | null;

  /**
   * Thread messages
   */
  messages?: Array<MessagesAPI.MessageDto>;

  /**
   * Thread metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * Thread name
   */
  name?: string | null;

  /**
   * Pending client tool call IDs
   */
  pendingToolCallIds?: Array<string>;

  /**
   * Current run status
   */
  runStatus?: 'idle' | 'waiting' | 'streaming';

  /**
   * Current status message for the thread
   */
  statusMessage?: string | null;

  /**
   * User key for scoping
   */
  userKey?: string | null;
}

/**
 * Request to update a thread.
 */
export interface UpdateThread {
  /**
   * Metadata to merge
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * New thread name
   */
  name?: string | null;
}

export interface ThreadCreateParams {
  /**
   * Body param: Initial messages to add
   */
  initialMessages?: Array<RunsAPI.InputMessage>;

  /**
   * Body param: Thread metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: User key for scoping
   */
  userKey?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export interface ThreadRetrieveParams {
  /**
   * Query param
   */
  userKey?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export interface ThreadUpdateParams {
  /**
   * Body param: Metadata to merge
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Body param: New thread name
   */
  name?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export interface ThreadListParams {
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
  userKey?: string | null;

  /**
   * Header param
   */
  'X-Api-Key'?: string;
}

export interface ThreadDeleteParams {
  'X-Api-Key'?: string;
}

Threads.GenerateName = GenerateName;
Threads.Messages = Messages;
Threads.Runs = Runs;
Threads.Components = Components;
Threads.Elicitation = Elicitation;

export declare namespace Threads {
  export {
    type CreateThread as CreateThread,
    type RunError as RunError,
    type ThreadDto as ThreadDto,
    type ThreadList as ThreadList,
    type ThreadWithMessages as ThreadWithMessages,
    type UpdateThread as UpdateThread,
    type ThreadCreateParams as ThreadCreateParams,
    type ThreadRetrieveParams as ThreadRetrieveParams,
    type ThreadUpdateParams as ThreadUpdateParams,
    type ThreadListParams as ThreadListParams,
    type ThreadDeleteParams as ThreadDeleteParams,
  };

  export {
    GenerateName as GenerateName,
    type GenerateNameGenerateNameParams as GenerateNameGenerateNameParams,
  };

  export {
    Messages as Messages,
    type MessageDto as MessageDto,
    type MessageList as MessageList,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
  };

  export {
    Runs as Runs,
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

  export { Components as Components };

  export {
    Elicitation as Elicitation,
    type ElicitationResponse as ElicitationResponse,
    type ElicitationResponseRequest as ElicitationResponseRequest,
    type ElicitationCreateParams as ElicitationCreateParams,
  };
}
