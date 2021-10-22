import proj4 from 'proj4';

proj4.defs('urn:ogc:def:crs:EPSG:6.18.3:3857', proj4.defs('EPSG:3857'));
proj4.defs('urn:ogc:def:crs:EPSG:3857', proj4.defs('EPSG:3857'));
proj4.defs('urn:ogc:def:crs:EPSG::3857', proj4.defs('EPSG:3857'));

export const imageToLonLat = (viewport, projection) => xy => {
  const viewportPoint = viewport.imageToViewportCoordinates(xy);
  return viewportToLonLat(projection)(viewportPoint);
}

export const lonLatToImageCoordinates = (viewport, projection) => lonLat => {
  const viewportPoint = lonLatToViewportCoordinates(projection)(lonlat);
  return viewport.viewportToImageCoordinates(viewportPoint);
}

export const lonLatToMapCoordinates = projection => lonLat => {
  return proj4('EPSG:4326', projection.code, lonLat);
}

export const lonLatToViewportCoordinates = projection => lonLat => {
  const eastNorth = proj4('EPSG:4326', projection.code, lonLat);
  return mapToViewportCoordinates(projection.extent)({ x: eastNorth[0], y: eastNorth[1] });
}

export const mapToLonLat = projection => eastNorth => {
  return proj4(projection.code, 'EPSG:4326', eastNorth);
}

export const mapToViewportCoordinates = worldExtent => eastNorth => {
  const east = eastNorth.x;
  const north = eastNorth.y;

  const [ worldWidth, worldHeight ] = worldExtent;

  // TODO this is true for most projections in practice, BUT NOT IN GENERAL! 
  const [ falseEast, falseNorth ] = [ worldWidth / 2, worldHeight / 2 ];

  const x = east + falseEast;
  const y = falseNorth - north;

  return [ x / worldWidth, y / worldHeight ];
}

export const viewportToLonLat = projection => xy => {
  const xy = viewportToMapCoordinates(projection.extent)(xy);
  return proj4(projection.code, 'EPSG:4326', xy);
}

export const viewportToMapCoordinates = worldExtent => xy => {
  const [ x, y ] = xy;

  const [ worldWidth, worldHeight ] = worldExtent;

  // TODO this is true for most projections in practice, BUT NOT IN GENERAL! 
  const [ falseEast, falseNorth ] = [ worldWidth / 2, worldHeight / 2 ];

  const east = x * worldWidth - falseEast;
  const north = falseNorth - y * worldHeight;

  return [ east, north ];
}





