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
        const { tileSource, mapBounds, projection } = parseCapabilities(text, args);

        const topLeft = lonLatToViewportCoordinates(projection)([
          Math.min(mapBounds[0], mapBounds[2]),
          Math.max(mapBounds[3], mapBounds[1])
        ]);

        const bottomRight = lonLatToViewportCoordinates(projection)([
          Math.max(mapBounds[2], mapBounds[0]),
          Math.min(mapBounds[3], mapBounds[1])
        ]);

        viewer.addTiledImage({ 
          tileSource,        
          success: () => {
            const viewportRegion = new Rect(topLeft[0], topLeft[1], bottomRight[0] - topLeft[0], bottomRight[1] - topLeft[1]);
            viewer.viewport.fitBounds(viewportRegion, true);

            const imageTopLeft = viewer.viewport.viewportToImageCoordinates(topLeft[0], topLeft[1]);
            const imageBottomRight = viewer.viewport.viewportToImageCoordinates(bottomRight[0], bottomRight[1]);

            const imageRegion = {
              x: imageTopLeft.x,
              y: imageTopLeft.y,
              width: imageBottomRight.x - imageTopLeft.x,
              height: imageBottomRight.y - imageTopLeft.y
            }
            
            resolve({
              // Useful metadata
              mapBounds,
              viewportRegion,
              imageRegion,

              // Image coordinate space transforms
              imageToLonLat: imageToLonLat(viewer.viewport, projection),
              imageRegionToLonLat: imageToLonLat(viewer.viewport, projection, imageTopLeft),
              lonLatToImage: lonLatToImageCoordinates(viewer.viewport, projection),
              lonLatToImageRegion: lonLatToImageCoordinates(viewer.viewport, projection, imageTopLeft),

              // Map and viewport coordinate space transforms
              mapToLonLat: mapToLonLat(projection),
              mapToViewportCoordinates: mapToViewportCoordinates(projection.extent),
              lonLatToMapCoordinates: lonLatToMapCoordinates(projection),
              lonLatToViewportCoordinates: lonLatToViewportCoordinates(projection),
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
