import proj4 from 'proj4';

export const viewportToMapCoordinates = worldExtent => xy => {
  const [ x, y ] = xy;

  const [ worldWidth, worldHeight ] = worldExtent;

  // TODO this is true for most projections in practice, BUT NOT IN GENERAL! 
  const [ falseEast, falseNorth ] = [ worldWidth / 2, worldHeight / 2 ];

  const east = x * worldWidth - falseEast;
  const north = falseNorth - y * worldHeight;

  return [ east, north ];
}

export const viewportToGeoCoordinates = projection => xy => {
  const eastNorth = viewportToMapCoordinates(projection.extent)(xy);
  return proj4(projection.code, 'EPSG:4326', eastNorth);
}

export const mapToViewportCoordinates = worldExtent => eastNorth => {
  const [ east, north ] = eastNorth;

  const [ worldWidth, worldHeight ] = worldExtent;

  // TODO this is true for most projections in practice, BUT NOT IN GENERAL! 
  const [ falseEast, falseNorth ] = [ worldWidth / 2, worldHeight / 2 ];

  const x = east + falseEast;
  const y = falseNorth - north;

  return [ x / worldWidth, y / worldHeight ];
}

export const geoToViewportCoordinates = projection => lonLat => {
  const eastNorth = proj4('EPSG:4326', projection.code, lonLat);
  return mapToViewportCoordinates(projection.extent)(eastNorth);
}

/*
var ulverstonGPS = [ -3.101720,54.194546 ];
var ulverstonEN = proj4('EPSG:4326', 'EPSG:3857', ulverstonGPS); // [ -345280,7207082 ];
var ulverstonOSD = webMercatorToViewport(ulverstonEN);

var tracker = new OpenSeadragon.MouseTracker({
    element: viewer.container,
    moveHandler: function(event) {
      var viewportPoint = viewer.viewport.pointFromPixel(event.position);
      var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);

      var [ east, north ] = imageToWebMercator([ imagePoint.x, imagePoint.y ]);

      var latlon = proj4('EPSG:3857', 'EPSG:4326', [ east, north ]);

      label.innerHTML = 'Lat ' + latlon[1].toFixed(4) + '&nbsp;&nbsp; Lon ' + latlon[0].toFixed(4);
      // console.log([ east, north]);
    }
});  

tracker.setTracking(true);  
*/
