import { parseCapabilities } from './WMTS';
import Rect from './osd/Rect';
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

  // Return after map has loaded
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.text())
      .then(text => {
        const { tileSource, wgs84Bounds, mapBounds, projection } = parseCapabilities(text, args);

        const topLeft = lonLatToViewportCoordinates(projection)([
          Math.min(wgs84Bounds[0], wgs84Bounds[2]),
          Math.max(wgs84Bounds[3], wgs84Bounds[1])
        ]);

        const bottomRight = lonLatToViewportCoordinates(projection)([
          Math.max(wgs84Bounds[2], wgs84Bounds[0]),
          Math.min(wgs84Bounds[3], wgs84Bounds[1])
        ]);

        const viewportBounds = new Rect(topLeft[0], topLeft[1], bottomRight[0] - topLeft[0], bottomRight[1] - topLeft[1]);

        viewer.addTiledImage({ 
          tileSource,        
          success: () => {
            viewer.viewport.fitBounds(viewportBounds, true);

            const offset = viewer.viewport.viewportToImageCoordinates(topLeft[0], topLeft[1]);

            // Loaded - resolve promise
            resolve({
              imageToLonLat: imageToLonLat(viewer.viewport, projection, offset),
              lonLatToImageCoordinates: lonLatToImageCoordinates(viewer.viewport, projection, offset),
              lonLatToMapCoordinates: lonLatToMapCoordinates(projection),
              lonLatToViewportCoordinates: lonLatToViewportCoordinates(projection),
              mapToLonLat: mapToLonLat(projection),
              mapToViewportCoordinates: mapToViewportCoordinates(projection.extent),
              viewportToLonLat: viewportToLonLat(projection),
              viewportToMapCoordinates: viewportToMapCoordinates(projection.extent)
            });
          },
          error: e => reject(e)
        });
        
      });
  });

}

export default OpenSeadragonWMTS;
