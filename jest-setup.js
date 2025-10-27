// Mock react-native-webview
jest.mock('react-native-webview', () => {
  const { View } = require('react-native');
  return {
    WebView: View,
  };
});

// Mock @react-native-community/slider
jest.mock('@react-native-community/slider', () => {
  const { View } = require('react-native');
  return {
    __esModule: true,
    default: View,
  };
});

// Mock @react-native-picker/picker
jest.mock('@react-native-picker/picker', () => {
  const { View } = require('react-native');
  return {
    Picker: View,
  };
});

// Mock react-native-image-viewing
jest.mock('react-native-image-viewing', () => {
  const { View } = require('react-native');
  return {
    __esModule: true,
    default: View,
  };
});

// Mock React Navigation
jest.mock('@react-navigation/native', () => {
  return {
    NavigationContainer: ({ children }) => children,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
    useFocusEffect: jest.fn(),
  };
});

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: () => ({
      Navigator: ({ children }) => children,
      Screen: () => null,
    }),
  };
});

// Mock react-native-screens
jest.mock('react-native-screens', () => {
  const { View } = require('react-native');
  return {
    enableScreens: jest.fn(),
    Screen: View,
    ScreenContainer: View,
  };
});

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const { View } = require('react-native');
  return {
    GestureHandlerRootView: View,
    TouchableOpacity: View,
    PanGestureHandler: View,
    State: {},
  };
});

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const { View } = require('react-native');
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: View,
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});

// Suppress console warnings during tests
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

beforeAll(() => {
  console.warn = (...args) => {
    // Suppress specific warnings that are expected in tests
    if (
      args[0]?.includes?.('Warning: ReactDOM.render is no longer supported') ||
      args[0]?.includes?.('Warning: An update to') ||
      args[0]?.includes?.('act()') ||
      args[0]?.includes?.('Jest environment')
    ) {
      return;
    }
    originalConsoleWarn(...args);
  };

  console.error = (...args) => {
    // Suppress specific errors that are expected in tests
    if (
      args[0]?.includes?.('Warning: ReactDOM.render is no longer supported') ||
      args[0]?.includes?.('Warning: An update to') ||
      args[0]?.includes?.('act()') ||
      args[0]?.includes?.('Jest environment')
    ) {
      return;
    }
    originalConsoleError(...args);
  };
});

afterAll(() => {
  console.warn = originalConsoleWarn;
  console.error = originalConsoleError;
});
