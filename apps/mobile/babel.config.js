module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@workspace/ui': '../packages/ui',
          },
        },
      ],
      // Required for expo-router
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  };
}; 