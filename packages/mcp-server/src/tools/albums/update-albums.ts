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
  name: 'update_albums',
  description: 'Updates the name and/or description of a specific album.',
  inputSchema: {
    type: 'object',
    properties: {
      album_id: {
        type: 'string',
        title: 'Album Id',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
    },
  },
};

export const handler = (client: Photos, args: any) => {
  const { album_id, ...body } = args;
  return client.albums.update(album_id, body);
};

export default { metadata, tool, handler };
