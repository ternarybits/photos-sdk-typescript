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
  name: 'download_thumbnail_assets',
  description:
    'Downloads a thumbnail for a specific asset. The exact thumbnail returned depends on availability and the optional `size` parameter.',
  inputSchema: {
    type: 'object',
    properties: {
      asset_id: {
        type: 'string',
        title: 'Asset Id',
      },
      size: {
        type: 'string',
        title: 'Size',
        description: 'Desired thumbnail size (e.g., thumbnail, preview)',
      },
    },
  },
};

export const handler = (client: Photos, args: any) => {
  const { asset_id, ...body } = args;
  return client.assets.downloadThumbnail(asset_id, body);
};

export default { metadata, tool, handler };
