/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      'snowpack-plugin-minify-html',
      {
        htmlMinifierOptions: {
          sortAttributes: true,
          html5: true,
          collapseWhitespace: true,
        },
      },
    ],
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2019',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
