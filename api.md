# Assets

Types:

- <code><a href="./src/resources/assets.ts">AssetResponse</a></code>

Methods:

- <code title="post /api/assets">client.assets.<a href="./src/resources/assets.ts">create</a>({ ...params }) -> AssetResponse</code>
- <code title="get /api/assets/{asset_id}">client.assets.<a href="./src/resources/assets.ts">retrieve</a>(assetID) -> AssetResponse</code>
- <code title="get /api/assets">client.assets.<a href="./src/resources/assets.ts">list</a>({ ...params }) -> AssetResponsesCursorPage</code>
- <code title="delete /api/assets/{asset_id}">client.assets.<a href="./src/resources/assets.ts">delete</a>(assetID) -> void</code>
- <code title="get /api/assets/{asset_id}/download">client.assets.<a href="./src/resources/assets.ts">download</a>(assetID) -> void</code>
- <code title="get /api/assets/{asset_id}/thumbnail">client.assets.<a href="./src/resources/assets.ts">downloadThumbnail</a>(assetID, { ...params }) -> void</code>

# Albums

Types:

- <code><a href="./src/resources/albums/albums.ts">AlbumResponse</a></code>

Methods:

- <code title="post /api/albums">client.albums.<a href="./src/resources/albums/albums.ts">create</a>({ ...params }) -> AlbumResponse</code>
- <code title="get /api/albums/{album_id}">client.albums.<a href="./src/resources/albums/albums.ts">retrieve</a>(albumID) -> AlbumResponse</code>
- <code title="patch /api/albums/{album_id}">client.albums.<a href="./src/resources/albums/albums.ts">update</a>(albumID, { ...params }) -> AlbumResponse</code>
- <code title="get /api/albums">client.albums.<a href="./src/resources/albums/albums.ts">list</a>({ ...params }) -> AlbumResponsesCursorPage</code>
- <code title="delete /api/albums/{album_id}">client.albums.<a href="./src/resources/albums/albums.ts">delete</a>(albumID) -> void</code>

## Assets

Types:

- <code><a href="./src/resources/albums/assets.ts">AlbumAssetAssociation</a></code>
- <code><a href="./src/resources/albums/assets.ts">AssetListResponse</a></code>

Methods:

- <code title="get /api/albums/{album_id}/assets">client.albums.assets.<a href="./src/resources/albums/assets.ts">list</a>(albumID) -> AssetListResponse</code>
- <code title="post /api/albums/{album_id}/assets">client.albums.assets.<a href="./src/resources/albums/assets.ts">add</a>(albumID, { ...params }) -> void</code>
- <code title="delete /api/albums/{album_id}/assets">client.albums.assets.<a href="./src/resources/albums/assets.ts">remove</a>(albumID, { ...params }) -> void</code>
