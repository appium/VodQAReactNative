/**
 * @format
 */

import React from 'react';
import {Alert, TouchableHighlight} from 'react-native';
import ReactTestRenderer, {act} from 'react-test-renderer';

import DoubleTap from '../screens/DoubleTap';

describe('DoubleTap', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('triggers alert on double tap and resets state so a third tap does not re-trigger', async () => {
    const alertSpy = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    const nowSpy = jest.spyOn(Date.prototype, 'getTime');

    let tree: ReactTestRenderer.ReactTestRenderer | undefined;
    await act(async () => {
      tree = ReactTestRenderer.create(React.createElement(DoubleTap));
    });

    const button = tree!.root.findByType(TouchableHighlight);

    nowSpy.mockReturnValueOnce(1000);
    await act(async () => {
      button.props.onPress();
    });
    expect(alertSpy).not.toHaveBeenCalled();

    nowSpy.mockReturnValueOnce(1100);
    await act(async () => {
      button.props.onPress();
    });
    expect(alertSpy).toHaveBeenCalledTimes(1);

    nowSpy.mockReturnValueOnce(1200);
    await act(async () => {
      button.props.onPress();
    });
    expect(alertSpy).toHaveBeenCalledTimes(1);
  });
});
