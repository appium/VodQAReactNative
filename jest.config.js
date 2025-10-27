module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|@react-navigation|react-native-screens|react-native-gesture-handler|react-native-safe-area-context|react-native-image-viewing|react-native-webview)/)',
  ],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)',
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/android/**',
    '!**/ios/**',
    '!**/coverage/**',
    '!**/__tests__/**',
    '!**/vendor/**',
    '!**/*.config.js',
    '!**/jest-setup.js',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  verbose: true,
  testEnvironment: 'node',
  globals: {
    __DEV__: true,
  },
};
