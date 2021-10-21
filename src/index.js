import { parseCapabilities } from './WMTS';
import {
  imageToLonLat,
  lonLatToImageCoordinates,
  lonLatToMapCoordinates,
  lonLatToViewportCoordinates,
  mapToLonLat,
  mapToViewportCoordinates,
  viewportToLonLat,
  viewportToMapCoordinates
} from './Transform';

const OpenSeadragonWMTS = (viewer, args) => {

  const { url } = args;

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      const { tileSource, mapBounds, projection } = parseCapabilities(text, args);

      const topLeft = lonLatToViewportCoordinates(projection)([
        Math.min(mapBounds[0], mapBounds[2]),
        Math.max(mapBounds[3], mapBounds[1])
      ]);

      const bottomRight = lonLatToViewportCoordinates(projection)([
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
        imageToLonLat: imageToLonLat(viewer.viewport, projection),
        lonLatToImageCoordinates: lonLatToImageCoordinates(viewer.viewport, projection),
        lonLatToMapCoordinates: lonLatToMapCoordinates(projection),
        lonLatToViewportCoordinates: lonLatToViewportCoordinates(projection),
        mapToLonLat: mapToLonLat(projection),
        mapToViewportCoordinates: mapToViewportCoordinates(projection.extent),
        viewportToLonLat: viewportToLonLat(projection),
        viewportToMapCoordinates: viewportToMapCoordinates(projection.extent)
      }
    });

}

export default OpenSeadragonWMTS;
