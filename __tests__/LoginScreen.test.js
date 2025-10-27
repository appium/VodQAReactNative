/**
 * @format
 */

import React from 'react';
import ReactTestRenderer, {act} from 'react-test-renderer';
import LoginScreen from '../screens/LoginScreen';

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    let tree;
    await act(async () => {
      tree = ReactTestRenderer.create(
        React.createElement(LoginScreen, {navigation: mockNavigation})
      );
    });
    expect(tree).toBeTruthy();
  });
});
