const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: [
      'png',
      'jpg',
      'jpeg',
      'gif',
      'svg',
      'ttf',
      'otf',
      'woff',
      'woff2',
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
