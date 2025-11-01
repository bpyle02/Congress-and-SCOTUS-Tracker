import netlify from '@astrojs/netlify';

export default {
  mode: 'static',          // or 'server' if you enable SSR
  adapter: netlify(),
  // your other options…
};
