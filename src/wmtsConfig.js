import WMTSCapabilities from 'ol/format/WMTSCapabilities';

const parseCRS = urn =>
  urn.substring(urn.indexOf('EPSG')).replace('::', ':');

const buildTileConfig = (wmtsCapabilitiesResponse, args) => {

  const parser = new WMTSCapabilities();

  const capabilities = parser.read(wmtsCapabilitiesResponse);

  console.log(capabilities);

  // Pick layer by name or (default) take first in list
  const Layer = args?.layer ? 
    capabilities.Contents.Layer.find(l => l.Title === args.layer) :
    capabilities.Contents.Layer[0];

  const TileUrlTemplate = 
    Layer.ResourceURL[0].template;

  const TileMatrixSetLink = 
    Layer.TileMatrixSetLink[0].TileMatrixSet;

  const TileMatrixSet =
    capabilities.Contents.TileMatrixSet.find(s => s.Identifier === TileMatrixSetLink);

  const { TileMatrix } = TileMatrixSet;

  const { 
    TileWidth, 
    TileHeight, 
    MatrixWidth, 
    MatrixHeight,
    TopLeftCorner 
  } = TileMatrix[ TileMatrix.length - 1 ];

  return {
    tileSource: {
      width: MatrixWidth * TileWidth,
      height: MatrixHeight * TileHeight,
      tileWidth: TileWidth,
      tileHeight: TileHeight,
      minLevel: 8,

      getTileUrl: (level, x, y) => TileUrlTemplate
        .replace('{TileMatrix}', level - 8)
        .replace('{TileCol}', x)
        .replace('{TileRow}', y)
    },

    // Should be [ minLon, minLat, maxLon, maxLat ]
    mapBounds: Layer.WGS84BoundingBox,

    projection: {
      code: parseCRS(TileMatrixSet.SupportedCRS),
      extent: [ 2 * Math.abs(TopLeftCorner[0]), 2 * Math.abs(TopLeftCorner[1]) ]
    }
    
  }

}

export default buildTileConfig;