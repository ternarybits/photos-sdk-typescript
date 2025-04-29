// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Photos from 'photos';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_assets from './assets/create-assets';
import retrieve_assets from './assets/retrieve-assets';
import list_assets from './assets/list-assets';
import delete_assets from './assets/delete-assets';
import download_assets from './assets/download-assets';
import download_thumbnail_assets from './assets/download-thumbnail-assets';
import create_albums from './albums/create-albums';
import retrieve_albums from './albums/retrieve-albums';
import update_albums from './albums/update-albums';
import list_albums from './albums/list-albums';
import delete_albums from './albums/delete-albums';
import list_albums_assets from './albums/assets/list-albums-assets';
import add_albums_assets from './albums/assets/add-albums-assets';
import remove_albums_assets from './albums/assets/remove-albums-assets';
import search_search from './search/search-search';

export type HandlerFunction = (client: Photos, args: any) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_assets);
addEndpoint(retrieve_assets);
addEndpoint(list_assets);
addEndpoint(delete_assets);
addEndpoint(download_assets);
addEndpoint(download_thumbnail_assets);
addEndpoint(create_albums);
addEndpoint(retrieve_albums);
addEndpoint(update_albums);
addEndpoint(list_albums);
addEndpoint(delete_albums);
addEndpoint(list_albums_assets);
addEndpoint(add_albums_assets);
addEndpoint(remove_albums_assets);
addEndpoint(search_search);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }
  const allExcludes = filters.every((filter) => filter.op === 'exclude');

  return endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        included = filter.op === 'include';
      }
    }

    return included;
  });
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
