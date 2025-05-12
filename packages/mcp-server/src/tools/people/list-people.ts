// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'people',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_people',
  description: 'Retrieves a paginated list of people, ordered by creation time, descending.',
  inputSchema: {
    type: 'object',
    properties: {
      album_id: {
        type: 'string',
        title: 'Album Id',
        description: 'Include only people associated with this album ID',
      },
      asset_id: {
        type: 'string',
        title: 'Asset Id',
        description: 'Include only people associated with this asset ID',
      },
      limit: {
        type: 'integer',
        title: 'Limit',
      },
      starting_after_id: {
        type: 'string',
        title: 'Starting After Id',
        description: 'Person ID to start listing people after',
      },
    },
  },
};

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.people.list(body);
};

export default { metadata, tool, handler };
