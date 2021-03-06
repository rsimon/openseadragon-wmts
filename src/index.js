import WMTSCapabilities from 'ol/format/WMTSCapabilities';

const URL = 'https://wmts.maptiler.com/aHR0cDovL3dtdHMubWFwdGlsZXIuY29tL2FIUjBjSE02THk5dFlYQnpaWEpwWlhNdGRHbHNaWE5sZEhNdWN6TXVZVzFoZW05dVlYZHpMbU52YlM4eU5WOXBibU5vTDJ4aGJtTmhjMmhwY21VdmJXVjBZV1JoZEdFdWFuTnZiZy9qc29u/wmts';

const parser = new WMTSCapabilities();

const OpenSeadragonWMTS = () => {
    
  console.log('Fetching WMTS capabilities');

  fetch(URL)
    .then(response => response.text())
    .then(text => {
      const result = parser.read(text);
      console.log(result);

      // TODO 
      // 1 - get first layer
      // 2 - get resource URL
      // 3 - get TileMatrixSet
      // 4 - TileMatrixSet defines zoom levels

      // OSD needs
      // - URL
      // - zoom levels
      // - tilesize
    });

}

export default OpenSeadragonWMTS;
