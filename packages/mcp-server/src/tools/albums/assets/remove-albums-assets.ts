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
  name: 'remove_albums_assets',
  description:
    'Removes one or more assets from a specific album. Note: This does not delete the assets themselves.',
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

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const { album_id, ...body } = args as any;
  return client.albums.assets.remove(album_id, body);
};

export default { metadata, tool, handler };
