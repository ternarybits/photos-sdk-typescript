// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'assets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_assets',
  description:
    'Retrieves a paginated list of assets, optionally filtered by album. Assets are ordered by local creation time, descending.',
  inputSchema: {
    type: 'object',
    properties: {
      album_id: {
        type: 'string',
        title: 'Album Id',
        description: 'Filter by assets in a specific album',
      },
      limit: {
        type: 'integer',
        title: 'Limit',
      },
      starting_after_id: {
        type: 'string',
        title: 'Starting After Id',
        description: 'Asset ID to start listing assets after',
      },
    },
  },
};

export const handler = (client: Photos, args: any) => {
  const { ...body } = args;
  return client.assets.list(body);
};

export default { metadata, tool, handler };
