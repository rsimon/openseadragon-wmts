import { parseCapabilities } from './WMTS';
import {
  geoToViewportCoordinates,
  viewportToGeoCoordinates,
  viewportToMapCoordinates
} from './Transform';

const OpenSeadragonWMTS = (viewer, args) => {

  const { url } = args;

  console.log('YEAH');

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      const { tileSource, mapBounds, projection } = parseCapabilities(text, args);

      const topLeft = geoToViewportCoordinates(projection)([
        Math.min(mapBounds[0], mapBounds[2]),
        Math.max(mapBounds[3], mapBounds[1])
      ]);

      const bottomRight = geoToViewportCoordinates(projection)([
        Math.max(mapBounds[2], mapBounds[0]),
        Math.min(mapBounds[3], mapBounds[1])
      ]);

      const viewportBounds = new OpenSeadragon.Rect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);

      const upper = viewportToMapCoordinates(projection.extent)(viewportBounds);
      const lower = viewportToMapCoordinates(projection.extent)({ x: viewportBounds.x + viewportBounds.width, y: viewportBounds.y + viewportBounds.height });
      
      viewer.addTiledImage({ 
        tileSource,
        x: upper.x,
        y: upper.y,
        width: (lower.x - upper.x),
        
        success: () => {
          viewer.viewport.fitBounds(new OpenSeadragon.Rect(
            -137495.19569796944, 
            7393216.214966129,
            2000,
            2000
          ), true);
        }
      });

      return {
        geoToViewportCoordinates: geoToViewportCoordinates(projection),
        viewportToGeoCoordinates: viewportToGeoCoordinates(projection)
      }
    });

}

export default OpenSeadragonWMTS;
