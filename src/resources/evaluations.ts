// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Evaluations extends APIResource {
  /**
   * Record a search evaluation (relevance, first result rank, variation, speed) to
   * Google Sheets.
   */
  record(body: EvaluationRecordParams, options?: RequestOptions): APIPromise<EvaluationRecordResponse> {
    return this._client.post('/v1/evaluations', { body, ...options });
  }
}

/**
 * Response after recording an evaluation.
 */
export interface EvaluationRecordResponse {
  /**
   * Whether the evaluation was recorded
   */
  success: boolean;

  /**
   * Status message
   */
  message?: string;
}

export interface EvaluationRecordParams {
  /**
   * Evaluator name (required for per-user tabs)
   */
  evaluator_name: string;

  /**
   * First result rank (1-5 Likert)
   */
  first_result_rank: number;

  /**
   * Search query that was evaluated
   */
  query: string;

  /**
   * Relevance score (1-5 Likert)
   */
  relevance: number;

  /**
   * Speed score (1-5 Likert)
   */
  speed: number;

  /**
   * Actual search latency in milliseconds (from API)
   */
  took_ms: number;

  /**
   * Variation/diversity score (1-5 Likert)
   */
  variation: number;

  /**
   * Whether neural search was enabled when the evaluation was performed
   */
  neural_on?: boolean;

  /**
   * Product IDs the user marked as not relevant to the search
   */
  not_relevant_products?: Array<string>;

  /**
   * Query ID from the evaluation query list (e.g. 1, 2, 3)
   */
  query_id?: string | null;
}

export declare namespace Evaluations {
  export {
    type EvaluationRecordResponse as EvaluationRecordResponse,
    type EvaluationRecordParams as EvaluationRecordParams,
  };
}
