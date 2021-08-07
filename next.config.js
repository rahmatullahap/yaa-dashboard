const withPWA = require("next-pwa");

module.exports = withPWA({
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  },
  // other next config
  pwa: {
    dest: "public",
  },
});
