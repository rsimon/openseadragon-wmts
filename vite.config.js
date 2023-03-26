import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    open: '/public/index.html'
  },
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.js',
      name: 'OpenSeadragonWMTS',
      fileName: 'openseadragon-wmts'
    },
    rollupOptions: {
      external: ['openseadragon'],
      output: {
        assetFileNames: 'openseadragon-wmts.[ext]',
        globals: {
          openseadragon: 'OpenSeadragon'
        }
      }
    }
  }
});