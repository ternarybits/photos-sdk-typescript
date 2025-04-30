// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'albums',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_albums',
  description: 'Deletes a specific album. Note: This does not delete the assets within the album.',
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
  return client.albums.delete(album_id);
};

export default { metadata, tool, handler };
