// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AssetsAPI from './assets';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Searches for assets based on a text query using semantic similarity.
   */
  search(query: SearchSearchParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.get('/api/search', { query, ...options });
  }
}

export interface SearchResponse {
  data: Array<SearchResponse.Data>;
}

export namespace SearchResponse {
  export interface Data {
    asset: AssetsAPI.AssetResponse;

    distance: number;
  }
}

export interface SearchSearchParams {
  /**
   * The text query to search for
   */
  query: string;

  /**
   * Number of results per page
   */
  limit?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Similarity threshold (lower means more similar)
   */
  threshold?: number;
}

export declare namespace Search {
  export { type SearchResponse as SearchResponse, type SearchSearchParams as SearchSearchParams };
}
