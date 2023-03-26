import proj4 from 'proj4';

proj4.defs('urn:ogc:def:crs:EPSG:6.18.3:3857', proj4.defs('EPSG:3857'));
proj4.defs('urn:ogc:def:crs:EPSG:3857', proj4.defs('EPSG:3857'));
proj4.defs('urn:ogc:def:crs:EPSG::3857', proj4.defs('EPSG:3857'));

export const imageToLonLat = (viewport, projection, offset = { x: 0, y: 0 }) => xy => {
  const pt = viewport.imageToViewportCoordinates(xy[0] + offset.x, xy[1] + offset.y);
  return viewportToLonLat(projection)([ pt.x, pt.y ]);
}

export const lonLatToImageCoordinates = (viewport, projection, offset = { x: 0, y: 0 }) => lonLat => {
  const pt = lonLatToViewportCoordinates(projection)(lonLat);
  const { x, y } = viewport.viewportToImageCoordinates(pt[0], pt[1]);
  return [ x - offset.x, y - offset.y ];
}

export const lonLatToMapCoordinates = projection => lonLat =>
  proj4('EPSG:4326', projection.code, lonLat);

export const lonLatToViewportCoordinates = projection => lonLat => {
  const eastNorth = proj4('EPSG:4326', projection.code, lonLat);
  return mapToViewportCoordinates(projection.extent)(eastNorth);
}

export const mapToLonLat = projection => eastNorth =>
  proj4(projection.code, 'EPSG:4326', eastNorth);

export const mapToViewportCoordinates = worldExtent => eastNorth => {
  const [ east, north ] = eastNorth;
  const [ worldWidth, worldHeight ] = worldExtent;

  const [ falseEast, falseNorth ] = [ worldWidth / 2, worldHeight / 2 ];

  const x = east + falseEast;
  const y = falseNorth - north;

  return [ x / worldWidth, y / worldHeight ];
}

export const viewportToLonLat = projection => xy => {
  const en = viewportToMapCoordinates(projection.extent)(xy);
  return proj4(projection.code, 'EPSG:4326', en);
}

export const viewportToMapCoordinates = worldExtent => xy => {
  const [ x, y ] = xy;

  const [ worldWidth, worldHeight ] = worldExtent;

  const [ falseEast, falseNorth ] = [ worldWidth / 2, worldHeight / 2 ];

  const east = x * worldWidth - falseEast;
  const north = falseNorth - y * worldHeight;

  return [ east, north ];
}





