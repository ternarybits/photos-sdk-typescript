// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetsAPI from './assets';
import {
  AssetCreateParams,
  AssetDeleteResponse,
  AssetDownloadResponse,
  AssetDownloadThumbnailParams,
  AssetDownloadThumbnailResponse,
  AssetListParams,
  AssetResponse,
  AssetResponsesCursorPage,
  Assets,
} from './assets';
import * as AlbumsAPI from './albums/albums';
import {
  AlbumCreateParams,
  AlbumDeleteResponse,
  AlbumListParams,
  AlbumResponse,
  AlbumResponsesCursorPage,
  AlbumUpdateParams,
  Albums,
} from './albums/albums';

export class API extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  albums: AlbumsAPI.Albums = new AlbumsAPI.Albums(this._client);
}

API.Assets = Assets;
API.Albums = Albums;

export declare namespace API {
  export {
    Assets as Assets,
    type AssetResponse as AssetResponse,
    type AssetDeleteResponse as AssetDeleteResponse,
    type AssetDownloadResponse as AssetDownloadResponse,
    type AssetDownloadThumbnailResponse as AssetDownloadThumbnailResponse,
    type AssetResponsesCursorPage as AssetResponsesCursorPage,
    type AssetCreateParams as AssetCreateParams,
    type AssetListParams as AssetListParams,
    type AssetDownloadThumbnailParams as AssetDownloadThumbnailParams,
  };

  export {
    Albums as Albums,
    type AlbumResponse as AlbumResponse,
    type AlbumDeleteResponse as AlbumDeleteResponse,
    type AlbumResponsesCursorPage as AlbumResponsesCursorPage,
    type AlbumCreateParams as AlbumCreateParams,
    type AlbumUpdateParams as AlbumUpdateParams,
    type AlbumListParams as AlbumListParams,
  };
}
