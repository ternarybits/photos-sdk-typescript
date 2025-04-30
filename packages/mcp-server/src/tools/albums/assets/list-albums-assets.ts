// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'albums.assets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_albums_assets',
  description: 'Retrieves a list of all assets contained within a specific album.',
  inputSchema: {
    type: 'object',
    properties: {
      album_id: {
        type: 'string',
        title: 'Album Id',
      },
    },
  },
};

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const { album_id, ...body } = args as any;
  return client.albums.assets.list(album_id);
};

export default { metadata, tool, handler };
