// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Photos from 'photos';

export const metadata: Metadata = {
  resource: 'people',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_people',
  description: 'Creates a new person entry.',
  inputSchema: {
    type: 'object',
    properties: {
      birth_date: {
        type: 'string',
        title: 'Birth Date',
        format: 'date',
      },
      is_favorite: {
        type: 'boolean',
        title: 'Is Favorite',
      },
      is_hidden: {
        type: 'boolean',
        title: 'Is Hidden',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      thumbnail_face_id: {
        type: 'string',
        title: 'Thumbnail Face Id',
      },
    },
  },
};

export const handler = (client: Photos, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.people.create(body);
};

export default { metadata, tool, handler };
