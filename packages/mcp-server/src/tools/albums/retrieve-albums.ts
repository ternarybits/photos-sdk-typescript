// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'albums',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_albums',
  description: 'Retrieves details for a specific album.',
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

export const handler = (client: Photos, args: any) => {
  const { album_id } = args;
  return client.albums.retrieve(album_id);
};

export default { metadata, tool, handler };
