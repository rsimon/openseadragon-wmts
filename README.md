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
```

The plugin will fetch the WMTS capabilities manifest, and (as default) add 
the __first available map layer__ using the __default style__. You can also 
select a specific layer and style:

```js
var map = await OpenSeadragon.WMTS(viewer, {
  url: 'http://maps.wien.gv.at/wmts/1.0.0/WMTSCapabilities.xml',
  layer: 'Orthofoto 2020',
  style: 'farbe'
});
```

The `map` object provides functions to convert OpenSeadragon viewport coordinates
to WGS84 GPS coordinates.

```js
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

| API Method               | Type                |                                         |
|--------------------------|---------------------|-----------------------------------------|
| viewportToGeoCoordinates | OpenSeadragon.Point | OSD viewport coordinate to [ lon, lat]  |
| geoToViewportCoordinates | [ lon, lat]         | WGS84 coordinate to OpenSeadragon.Point |
