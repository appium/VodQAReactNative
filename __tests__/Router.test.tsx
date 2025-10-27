/**
 * @format
 */

// Mock all screen components with simple implementations
jest.mock('../screens/LoginScreen', () => {
  const { View } = require('react-native');
  return function MockLoginScreen() {
    return View({ testID: 'login-screen' });
  };
});

jest.mock('../screens/SamplesListScreen', () => {
  const { View } = require('react-native');
  return function MockSamplesListScreen() {
    return View({ testID: 'samples-list-screen' });
  };
});

// Mock all other screens
const mockScreen = () => {
  const { View } = require('react-native');
  return function MockScreen() {
    return View({ testID: 'mock-screen' });
  };
};

jest.mock('../screens/CarouselScreen', () => mockScreen());
jest.mock('../screens/PhotoScreen', () => mockScreen());
jest.mock('../screens/WebViewScreen', () => mockScreen());
jest.mock('../screens/SliderScreen', () => mockScreen());
jest.mock('../screens/DrapAndDrop', () => mockScreen());
jest.mock('../screens/VerticalSwipe', () => mockScreen());
jest.mock('../screens/DoubleTap', () => mockScreen());
jest.mock('../screens/LongPress', () => mockScreen());
jest.mock('../screens/NativeView', () => mockScreen());
jest.mock('../screens/WheelPicker', () => mockScreen());

describe('Router', () => {
  let Router: React.ComponentType;
  let ReactTestRenderer: any;
  let React: any;
  let act: any;

  beforeAll(async () => {
    // Import Router after mocks are set up
    Router = require('../router/Router').default;
    ReactTestRenderer = require('react-test-renderer');
    React = require('react');
    act = ReactTestRenderer.act;
  });

  it('renders without crashing', async () => {
    let tree: any;
    await act(async () => {
      tree = ReactTestRenderer.create(React.createElement(Router));
    });
    expect(tree).toBeTruthy();
  });
});
