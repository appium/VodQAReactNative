import appiumConfig, {defineConfig, ignorePatterns} from '@appium/oxc-config/oxfmt';

export default defineConfig({
  ...appiumConfig,
  ignorePatterns: [
    ...ignorePatterns,
    'ios/**',
    'android/**',
    '**/*.lock',
    'package-lock.json',
    '**/*.apk',
    '**/*.ipa',
    '**/*.xcarchive',
  ],
});
