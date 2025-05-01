// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'faces',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_faces',
  description:
    'Updates the details of a specific face, currently only supporting associating/disassociating with a person.',
  inputSchema: {
    type: 'object',
    properties: {
      face_id: {
        type: 'string',
        title: 'Face Id',
      },
      person_id: {
        type: 'string',
        title: 'Person Id',
      },
    },
  },
};

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const { face_id, ...body } = args as any;
  return client.faces.update(face_id, body);
};

export default { metadata, tool, handler };
