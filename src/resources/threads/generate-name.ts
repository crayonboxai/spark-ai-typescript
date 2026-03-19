// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ThreadsAPI from './threads';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GenerateName extends APIResource {
  /**
   * Generate a name for the thread from its first user message.
   */
  generateName(
    threadID: string,
    params: GenerateNameGenerateNameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadsAPI.ThreadDto> {
    const { 'X-Api-Key': xAPIKey } = params ?? {};
    return this._client.post(path`/threads/${threadID}/generate-name`, {
      ...options,
      headers: buildHeaders([
        { ...(xAPIKey != null ? { 'X-Api-Key': xAPIKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface GenerateNameGenerateNameParams {
  'X-Api-Key'?: string;
}

export declare namespace GenerateName {
  export { type GenerateNameGenerateNameParams as GenerateNameGenerateNameParams };
}
