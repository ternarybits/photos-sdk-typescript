# Photos TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:ternarybits/photos-sdk-typescript.git
cd photos-sdk-typescript
yarn && ./scripts/build-all
```

### Running

```sh
# set env vars as needed
export PHOTOS_API_KEY="My API Key"
npx ./packages/mcp-server
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y photos-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "photos_api": {
      "command": "npx",
      "args": ["-y", "/path/to/local/photos-sdk-typescript/packages/mcp-server"],
      "env": {
        "PHOTOS_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "photos-mcp/server";

// import a specific tool
import createAssets from "photos-mcp/tools/assets/create-assets";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAssets, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `assets`:

- `create_assets` (`write`): Uploads a new asset file (image or video) along with its metadata. If an asset with the same checksum already exists, returns the existing asset's metadata.
- `retrieve_assets` (`read`): Retrieves detailed metadata for a specific asset, including EXIF information and asset metrics.
- `list_assets` (`read`): Retrieves a paginated list of assets, optionally filtered by album. Assets are ordered by local creation time, descending.
- `delete_assets` (`write`): Deletes a specific asset and its associated data (including the file from storage).
- `download_assets` (`read`): Downloads the original file for a specific asset.
- `download_thumbnail_assets` (`read`): Downloads a thumbnail for a specific asset. The exact thumbnail returned depends on availability and the optional `size` parameter.

### Resource `albums`:

- `create_albums` (`write`): Creates a new, empty album with a given name and optional description.
- `retrieve_albums` (`read`): Retrieves details for a specific album.
- `update_albums` (`write`): Updates the name and/or description of a specific album.
- `list_albums` (`read`): Retrieves a paginated list of albums, ordered by creation time, descending.
- `delete_albums` (`write`): Deletes a specific album. Note: This does not delete the assets within the album.

### Resource `albums.assets`:

- `list_albums_assets` (`read`): Retrieves a list of all assets contained within a specific album.
- `add_albums_assets` (`write`): Adds one or more existing assets to a specific album.
- `remove_albums_assets` (`write`): Removes one or more assets from a specific album. Note: This does not delete the assets themselves.

### Resource `search`:

- `search_search` (`read`): Searches for assets based on a text query using semantic similarity.
