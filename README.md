# OpenSeadragonWMTS

Adds support for displaying geo-referenced [WMTS tile maps](https://en.wikipedia.org/wiki/Web_Map_Tile_Service)
in OpenSeadragon.

See [online demo](https://annotorious.github.io/openseadragon-wmts).

## Install

Download the [latest release](https://github.com/annotorious/openseadragon-wmts/releases/latest) or grab
directly from the CDN. Import into your page:

```html
<script src="https://cdn.jsdelivr.net/npm/openseadragon-wmts@latest/dist/openseadragon-wmts.umd.cjs"></script>
```

Or install via npm:

```sh
$ npm install openseadragon-wmts
```

## Use

```js
var viewer = OpenSeadragon({
  id: "openseadragon",
  prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/"
});

// Initialize the plugin
var map = await OpenSeadragonWMTS(viewer, {
  url: 'http://maps.wien.gv.at/wmts/1.0.0/WMTSCapabilities.xml'
});

// The map object provides functions to convert OSD coordinates to WGS84
var mouseTracker = new OpenSeadragon.MouseTracker({
  element: viewer.container,

  moveHandler: function(event) {
    var viewportPoint = viewer.viewport.pointFromPixel(event.position);

    var lonlat = map.viewportToLonLat(viewportPoint);
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

| Method                      | Type          |                                    |
|-----------------------------|---------------|------------------------------------|
| imageToLonLat               | [x, y]        | Image X/Y to lon/lat               |
| lonLatToImageCoordinates    | [lon, lat]    | lon/lat to image X/Y               |
| lonLatToMapCoordinates      | [lon, lat]    | lon/lat to map projection          |
| lonLatToViewportCoordinates | [lon, lat]    | lon/lat to OSD viewport X/Y        |
| mapToLonLat                 | [east, north] | Map projection to lon/lat          |
| mapToViewportCoordinates    | [east, north] | Map projection to OSD viewport X/Y |
| viewportToLonLat            | [x, y]        | OSD viewport X/Y to lon/lat        |
| viewportToMapCoordinates    | [x, y]        | OSD viewport X/Y to map projection |
