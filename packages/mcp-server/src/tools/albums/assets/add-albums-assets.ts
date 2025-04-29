// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'albums.assets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'add_albums_assets',
  description: 'Adds one or more existing assets to a specific album.',
  inputSchema: {
    type: 'object',
    properties: {
      album_id: {
        type: 'string',
        title: 'Album Id',
      },
      asset_ids: {
        type: 'array',
        title: 'Asset Ids',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Photos, args: any) => {
  const { album_id, ...body } = args;
  return client.albums.assets.add(album_id, body);
};

export default { metadata, tool, handler };
