ymodule.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@workspace/ui': '../../packages/ui',
          },
        },
      ],
      // Keep this last
      'react-native-reanimated/plugin',
    ],
  };
}; 