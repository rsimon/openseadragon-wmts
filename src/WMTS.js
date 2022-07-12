import WMTSCapabilities from 'ol/format/WMTSCapabilities';

export const parseCapabilities = (response, args) => {

  const parser = new WMTSCapabilities();

  const capabilities = parser.read(response);
  
  // Pick layer by name or (default) take first in list
  const Layer = args?.layer ? 
    capabilities.Contents.Layer.find(l => l.Title === args.layer) :
    capabilities.Contents.Layer[0];

  const Style = args?.style || 
    Layer.Style.find(s => s.isDefault).Identifier;

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
  } = TileMatrix[ Math.max(20, TileMatrix.length - 2) ];

  return {
    tileSource: {
      width: MatrixWidth * TileWidth,
      height: MatrixHeight * TileHeight,
      tileWidth: TileWidth,
      tileHeight: TileHeight,
      minLevel: 8,

      getTileUrl: (level, x, y) => TileUrlTemplate
        .replace('{Style}', Style)
        .replace('{TileMatrixSet}', TileMatrixSetLink)
        .replace('{TileMatrix}', level - 8)
        .replace('{TileCol}', x)
        .replace('{TileRow}', y)
    },

    // Should be [ minLon, minLat, maxLon, maxLat ]
    mapBounds: Layer.WGS84BoundingBox,

    projection: {
      code: TileMatrixSet.SupportedCRS,
      extent: [ 2 * Math.abs(TopLeftCorner[0]), 2 * Math.abs(TopLeftCorner[1]) ]
    }
    
  }

}