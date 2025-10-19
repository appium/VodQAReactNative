# VodQAReactNative

A React Native mobile application demonstrating various UI interactions and gestures, rebuilt on React Native 0.73.6.

## Features

- **Carousel**: Horizontal scrolling carousel with paging
- **Login Screen**: User authentication interface
- **Samples List**: Navigable list of UI samples
- **Drag and Drop**: Interactive drag and drop functionality
- **Double Tap**: Double tap gesture detection
- **Long Press**: Long press gesture handling
- **Vertical Swipe**: Vertical swipe interactions
- **Slider**: Value adjustment with slider control
- **Wheel Picker**: iOS-style picker wheel selection
- **Photo Viewer**: Zoomable image viewing
- **WebView**: In-app web content display
- **Native Views**: Platform-specific native components

## Prerequisites

### iOS Development

- macOS with Xcode 14 or later
- CocoaPods installed (`gem install cocoapods`)
- iOS Simulator or physical iOS device
- Ruby 2.7 or later

### Android Development

- Android Studio with Android SDK
- Android SDK Platform 33 or later
- Java JDK 17 or later
- Android emulator or physical Android device

### General

- Node.js 18 or later
- npm or yarn package manager

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd VodQAReactNative
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **iOS Setup**

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Android Setup**
   - Open Android Studio
   - Configure Android SDK if not already set up
   - Ensure ANDROID_HOME environment variable is set

## Running the App

### iOS

```bash
npm run ios
```

Or specify a device:

```bash
npm run ios -- --simulator="iPhone 15"
```

### Android

```bash
npm run android
```

Or specify a device:

```bash
npm run android -- --deviceId=<device-id>
```

### Metro Bundler

Start the Metro bundler separately:

```bash
npm start
```

## Available Scripts

- `npm run ios` - Run on iOS simulator/device
- `npm run android` - Run on Android emulator/device
- `npm start` - Start Metro bundler
- `npm test` - Run tests
- `npm run lint` - Lint code

## Project Structure

```
VodQAReactNative/
├── android/              # Android native code
├── ios/                  # iOS native code
├── screens/              # React Native screen components
│   ├── CarouselScreen.js
│   ├── DoubleTap.js
│   ├── DrapAndDrop.js
│   ├── LoginScreen.js
│   ├── LongPress.js
│   ├── NativeView.js
│   ├── PhotoScreen.js
│   ├── SamplesListScreen.js
│   ├── SliderScreen.js
│   ├── VerticalSwipe.js
│   ├── WebViewScreen.js
│   └── WheelPicker.js
├── router/               # Navigation configuration
│   ├── Router.js
│   └── Routes.js
├── helpers/              # Utility functions
│   └── PlatformSpecificStyles.js
├── assets/               # Images and static assets
├── index.js              # Application entry point
├── metro.config.js       # Metro bundler configuration
└── package.json          # Project dependencies
```

## Tech Stack

- **React Native**: 0.73.6
- **React**: 18.2.0
- **Navigation**: Custom navigator implementation
- **UI Components**:
  - `@react-native-community/slider` - Slider component
  - `@react-native-picker/picker` - Picker component
  - `react-native-image-viewing` - Image viewer
  - `react-native-webview` - WebView component

## Migration Notes

This project has been migrated to React Native 0.73.6 from an older version. See [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) for details.

### Key Updates

- Replaced deprecated `react-native-looped-carousel` with native ScrollView
- Updated to `react-native-image-viewing` from `react-native-photo-view`
- Migrated to community-maintained slider and picker components

## Troubleshooting

### iOS Build Issues

- Clean build folder: `cd ios && xcodebuild clean && cd ..`
- Reinstall pods: `cd ios && pod deintegrate && pod install && cd ..`
- Reset Metro cache: `npm start -- --reset-cache`

### Android Build Issues

- Clean Gradle cache: `cd android && ./gradlew clean && cd ..`
- Reset Metro cache: `npm start -- --reset-cache`
- Check ANDROID_HOME is set: `echo $ANDROID_HOME`

### Metro Bundler Issues

- Clear watchman: `watchman watch-del-all`
- Reset Metro cache: `npm start -- --reset-cache`
- Clear node modules: `rm -rf node_modules && npm install`

## License

See LICENSE file for details.
