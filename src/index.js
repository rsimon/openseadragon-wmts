import wmtsConfig from './wmtsConfig';

import {
  geoToViewportCoordinates
} from './Projection';

const OpenSeadragonWMTS = (viewer, args) => {

  const { url } = args;

  fetch(url)
    .then(response => response.text())
    .then(text => {

      const { tileSource, mapBounds, projection } = wmtsConfig(text);

      // Should be [ minLon, minLat, maxLon, maxLat ]
      const [ left, top ] = geoToViewportCoordinates(projection)([
        Math.min(mapBounds[0], mapBounds[2]),
        Math.max(mapBounds[3], mapBounds[1])
      ]);

      const [ right, bottom ] =geoToViewportCoordinates(projection)([
        Math.max(mapBounds[2], mapBounds[0]),
        Math.min(mapBounds[3], mapBounds[1])
      ]);

      const viewportBounds = new OpenSeadragon.Rect(left, top, right - left, bottom - top);

      viewer.addTiledImage({ 
        tileSource,
        success: () => {
          viewer.viewport.fitBounds(viewportBounds, true);
        }
      });

    });

}

export default OpenSeadragonWMTS;
