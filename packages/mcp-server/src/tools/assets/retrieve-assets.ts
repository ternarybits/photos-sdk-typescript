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
  name: 'retrieve_assets',
  description:
    'Retrieves detailed metadata for a specific asset, including EXIF information and asset metrics.',
  inputSchema: {
    type: 'object',
    properties: {
      asset_id: {
        type: 'string',
        title: 'Asset Id',
      },
    },
  },
};

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const { asset_id, ...body } = args as any;
  return client.assets.retrieve(asset_id);
};

export default { metadata, tool, handler };
