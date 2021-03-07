import proj4 from 'proj4';

proj4.defs('urn:ogc:def:crs:EPSG:6.18.3:3857', proj4.defs('EPSG:3857'));
proj4.defs('urn:ogc:def:crs:EPSG::3857', proj4.defs('EPSG:3857'));

export const viewportToMapCoordinates = worldExtent => xy => {
  const { x, y } = xy;

  const [ worldWidth, worldHeight ] = worldExtent;

  // TODO this is true for most projections in practice, BUT NOT IN GENERAL! 
  const [ falseEast, falseNorth ] = [ worldWidth / 2, worldHeight / 2 ];

  const east = x * worldWidth - falseEast;
  const north = falseNorth - y * worldHeight;

  return { x: east, y: north };
}

export const viewportToGeoCoordinates = projection => xy => {
  const { x, y } = viewportToMapCoordinates(projection.extent)(xy);
  return proj4(projection.code, 'EPSG:4326', [ x, y ]);
}

export const mapToViewportCoordinates = worldExtent => eastNorth => {
  const east = eastNorth.x;
  const north = eastNorth.y;

  const [ worldWidth, worldHeight ] = worldExtent;

  // TODO this is true for most projections in practice, BUT NOT IN GENERAL! 
  const [ falseEast, falseNorth ] = [ worldWidth / 2, worldHeight / 2 ];

  const x = east + falseEast;
  const y = falseNorth - north;

  return { x: x / worldWidth, y: y / worldHeight };
}

export const geoToViewportCoordinates = projection => lonLat => {
  const eastNorth = proj4('EPSG:4326', projection.code, lonLat);
  return mapToViewportCoordinates(projection.extent)({ x: eastNorth[0], y: eastNorth[1] });
}
