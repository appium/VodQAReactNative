/**
 * @format
 */

import React from 'react';
import ReactTestRenderer, {act} from 'react-test-renderer';
import SamplesListScreen from '../screens/SamplesListScreen';

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('SamplesListScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    let tree;
    await act(async () => {
      tree = ReactTestRenderer.create(
        React.createElement(SamplesListScreen, {navigation: mockNavigation})
      );
    });
    expect(tree).toBeTruthy();
  });
});
