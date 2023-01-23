import { resolve } from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import autoprefixer from 'autoprefixer';

interface Options {
  pretty: boolean;
}
const options: Options = { pretty: true }; // FIXME: pug pretty is deprecated!
const locals = { name: 'My Pug' };

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
      },
    },
  },
  plugins: [pugPlugin(options, locals)],
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
