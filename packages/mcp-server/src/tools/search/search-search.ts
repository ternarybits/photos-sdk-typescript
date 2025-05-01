// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'search_search',
  description: 'Searches for assets based on a text query using semantic similarity.',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        title: 'Query',
        description: 'The text query to search for',
      },
      limit: {
        type: 'integer',
        title: 'Limit',
        description: 'Number of results per page',
      },
      page: {
        type: 'integer',
        title: 'Page',
        description: 'Page number',
      },
      threshold: {
        type: 'number',
        title: 'Threshold',
        description: 'Similarity threshold (lower means more similar)',
      },
    },
  },
};

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.search.search(body);
};

export default { metadata, tool, handler };
