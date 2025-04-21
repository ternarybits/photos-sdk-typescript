# API

## Assets

Types:

- <code><a href="./src/resources/api/assets.ts">AssetResponse</a></code>
- <code><a href="./src/resources/api/assets.ts">AssetDeleteResponse</a></code>
- <code><a href="./src/resources/api/assets.ts">AssetDownloadResponse</a></code>
- <code><a href="./src/resources/api/assets.ts">AssetDownloadThumbnailResponse</a></code>

Methods:

- <code title="post /api/assets">client.api.assets.<a href="./src/resources/api/assets.ts">create</a>({ ...params }) -> AssetResponse</code>
- <code title="get /api/assets/{asset_id}">client.api.assets.<a href="./src/resources/api/assets.ts">retrieve</a>(assetID) -> AssetResponse</code>
- <code title="get /api/assets">client.api.assets.<a href="./src/resources/api/assets.ts">list</a>({ ...params }) -> AssetResponsesCursorPage</code>
- <code title="delete /api/assets/{asset_id}">client.api.assets.<a href="./src/resources/api/assets.ts">delete</a>(assetID) -> unknown</code>
- <code title="get /api/assets/{asset_id}/download">client.api.assets.<a href="./src/resources/api/assets.ts">download</a>(assetID) -> unknown</code>
- <code title="get /api/assets/{asset_id}/thumbnail">client.api.assets.<a href="./src/resources/api/assets.ts">downloadThumbnail</a>(assetID, { ...params }) -> unknown</code>

## Albums

Types:

- <code><a href="./src/resources/api/albums/albums.ts">AlbumResponse</a></code>
- <code><a href="./src/resources/api/albums/albums.ts">AlbumDeleteResponse</a></code>

Methods:

- <code title="post /api/albums">client.api.albums.<a href="./src/resources/api/albums/albums.ts">create</a>({ ...params }) -> AlbumResponse</code>
- <code title="get /api/albums/{album_id}">client.api.albums.<a href="./src/resources/api/albums/albums.ts">retrieve</a>(albumID) -> AlbumResponse</code>
- <code title="patch /api/albums/{album_id}">client.api.albums.<a href="./src/resources/api/albums/albums.ts">update</a>(albumID, { ...params }) -> AlbumResponse</code>
- <code title="get /api/albums">client.api.albums.<a href="./src/resources/api/albums/albums.ts">list</a>({ ...params }) -> AlbumResponsesCursorPage</code>
- <code title="delete /api/albums/{album_id}">client.api.albums.<a href="./src/resources/api/albums/albums.ts">delete</a>(albumID) -> unknown</code>

### Assets

Types:

- <code><a href="./src/resources/api/albums/assets.ts">AlbumAssetAssociation</a></code>
- <code><a href="./src/resources/api/albums/assets.ts">AssetListResponse</a></code>
- <code><a href="./src/resources/api/albums/assets.ts">AssetAddResponse</a></code>
- <code><a href="./src/resources/api/albums/assets.ts">AssetRemoveResponse</a></code>

Methods:

- <code title="get /api/albums/{album_id}/assets">client.api.albums.assets.<a href="./src/resources/api/albums/assets.ts">list</a>(albumID) -> AssetListResponse</code>
- <code title="post /api/albums/{album_id}/assets">client.api.albums.assets.<a href="./src/resources/api/albums/assets.ts">add</a>(albumID, { ...params }) -> unknown</code>
- <code title="delete /api/albums/{album_id}/assets">client.api.albums.assets.<a href="./src/resources/api/albums/assets.ts">remove</a>(albumID, { ...params }) -> unknown</code>
