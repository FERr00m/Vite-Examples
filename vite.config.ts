import { resolve } from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import autoprefixer from 'autoprefixer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

interface Options {
  pretty: boolean;
}
const options: Options = { pretty: true }; // FIXME: pug pretty is deprecated!
const locals = { name: 'MyPug' };

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        main: resolve(__dirname, 'pages/main.html'),
        uikit: resolve(__dirname, 'pages/ui-kit.html'),
      },
      output: {
        assetFileNames: `assets/[name].[ext]`,
        chunkFileNames: `assets/main.js`,
      },
    },
    target: 'es2017',
  },
  plugins: [
    pugPlugin(options, locals),
    ViteImageOptimizer({
      //include: 'public/img/**/*',
      includePublic: false,
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
    devSourcemap: true,
  },
  server: {
    open: '/index.html',
    port: 5000,
  },
});
