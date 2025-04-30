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
  name: 'create_albums',
  description: 'Creates a new, empty album with a given name and optional description.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
    },
  },
};

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.albums.create(body);
};

export default { metadata, tool, handler };
