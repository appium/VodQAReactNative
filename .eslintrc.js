module.exports = {
  root: true,
  extends: '@react-native',
  env: {
    jest: true,
  },
  overrides: [
    {
      files: [
        'jest-setup.js',
        '**/__tests__/**/*',
        '**/*.test.*',
        '**/*.spec.*',
      ],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
};
