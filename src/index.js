import { parseCapabilities } from './WMTS';
import {
  geoToViewportCoordinates,
  viewportToGeoCoordinates
} from './Transform';

const OpenSeadragonWMTS = (viewer, args) => {

  const { url } = args;

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      const { tileSource, mapBounds, projection } = parseCapabilities(text);

      const topLeft = geoToViewportCoordinates(projection)([
        Math.min(mapBounds[0], mapBounds[2]),
        Math.max(mapBounds[3], mapBounds[1])
      ]);

      const bottomRight = geoToViewportCoordinates(projection)([
        Math.max(mapBounds[2], mapBounds[0]),
        Math.min(mapBounds[3], mapBounds[1])
      ]);

      const viewportBounds = new OpenSeadragon.Rect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);

      viewer.addTiledImage({ 
        tileSource,
        success: () => {
          viewer.viewport.fitBounds(viewportBounds, true);
        }
      });

      return {
        geoToViewportCoordinates: geoToViewportCoordinates(projection),
        viewportToGeoCoordinates: viewportToGeoCoordinates(projection)
      }
    });

}

export default OpenSeadragonWMTS;
