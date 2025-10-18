import 'react-native';
import React from 'react';
import VodQAReactNative from '../index.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('VodQAReactNative iOS', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<VodQAReactNative />);
    expect(tree).toBeTruthy();
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<VodQAReactNative />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
