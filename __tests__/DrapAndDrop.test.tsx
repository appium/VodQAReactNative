/**
 * @format
 */

import React from 'react';
import {Animated} from 'react-native';
import ReactTestRenderer, {act} from 'react-test-renderer';

import DrapAndDrop from '../screens/DrapAndDrop';

describe('DrapAndDrop', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('passes useNativeDriver: false to Animated.event', async () => {
    const eventSpy = jest.spyOn(Animated, 'event');

    let tree: ReactTestRenderer.ReactTestRenderer | undefined;
    await act(async () => {
      tree = ReactTestRenderer.create(React.createElement(DrapAndDrop));
    });

    expect(tree).toBeTruthy();
    expect(eventSpy).toHaveBeenCalledWith(expect.any(Array), {useNativeDriver: false});
  });
});
