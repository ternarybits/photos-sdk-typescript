// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'faces',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'download_thumbnail_faces',
  description: 'Retrieves a thumbnail for a specific face.',
  inputSchema: {
    type: 'object',
    properties: {
      face_id: {
        type: 'string',
        title: 'Face Id',
      },
    },
  },
};

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const { face_id, ...body } = args as any;
  return client.faces.downloadThumbnail(face_id);
};

export default { metadata, tool, handler };
