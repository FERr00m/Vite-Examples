import { resolve } from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import autoprefixer from 'autoprefixer';
import viteImagemin from 'vite-plugin-imagemin';

interface Options {
  pretty: boolean;
}
const options: Options = { pretty: true }; // FIXME: pug pretty is deprecated!
const locals = { name: 'My Pug' };

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        main: resolve(__dirname, 'pages/main.html'),
        uikit: resolve(__dirname, 'pages/ui-kit.html'),
      },
    },
  },
  plugins: [
    pugPlugin(options, locals),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 90,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
  server: {
    open: '/index.html',
    port: 5000,
  },
});
