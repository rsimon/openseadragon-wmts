# OpenSeadragon WMTS

An experimental OpenSeadragon plugin to display a geo-referenced map layer
served from a [WMTS](https://en.wikipedia.org/wiki/Web_Map_Tile_Service) endpoint.

## Use

```js
var viewer = OpenSeadragon({
  id: "openseadragon",
  prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/"
});

// Initialize the plugin
var map = await OpenSeadragon.WMTS(viewer, {
  url: 'http://maps.wien.gv.at/wmts/1.0.0/WMTSCapabilities.xml'
});

// The map object provides functions to convert OSD coordinates to WGS84
var mouseTracker = new OpenSeadragon.MouseTracker({
  element: viewer.container,

  moveHandler: function(event) {
    var viewportPoint = viewer.viewport.pointFromPixel(event.position);

    var lonlat = map.viewportToGeoCoordinates(viewportPoint);
    console.log(lonlat);
 }

});

mouseTracker.setTracking(true);
```

Per default, the plugin displays the first available map layer with the default style. To select a specific layer and style:

```js
var map = await OpenSeadragon.WMTS(viewer, {
  url: 'http://maps.wien.gv.at/wmts/1.0.0/WMTSCapabilities.xml',
  layer: 'Orthofoto 2020',
  style: 'farbe'
});
```

## API

| Method                   | Type                |                                         |
|--------------------------|---------------------|-----------------------------------------|
| viewportToGeoCoordinates | OpenSeadragon.Point | OSD viewport coordinate to [ lon, lat]  |
| geoToViewportCoordinates | [ lon, lat]         | WGS84 coordinate to OpenSeadragon.Point |
