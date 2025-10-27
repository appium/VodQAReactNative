/**
 * @format
 */

import React from 'react';
import ReactTestRenderer, {act} from 'react-test-renderer';
import VodQAReactNative from '../index';

test('renders correctly', async () => {
  let tree;
  await act(async () => {
    tree = ReactTestRenderer.create(<VodQAReactNative />);
  });
  expect(tree).toBeTruthy();
});
