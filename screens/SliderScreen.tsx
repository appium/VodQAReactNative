import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  PanResponderInstance,
} from 'react-native';

interface State {
  value: number;
  value1: number;
}

const THUMB_SIZE = 28;
const TRACK_HEIGHT = 4;
const MIN_VALUE = 0;
const MAX_VALUE = 100;
const SLIDER_WIDTH = 300;

class SliderScreen extends Component<{}, State> {
  private startValue = 0;
  private startValue1 = 0;

  private thumbPanResponder: PanResponderInstance;
  private thumbPanResponder1: PanResponderInstance;

  constructor(props: {}) {
    super(props);
    this.state = {
      value: 0,
      value1: 0,
    };

    this.thumbPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.startValue = this.state.value;
      },
      onPanResponderMove: (_e, gestureState) => {
        const deltaValue =
          (gestureState.dx / SLIDER_WIDTH) * (MAX_VALUE - MIN_VALUE);
        const newValue = Math.min(
          Math.max(this.startValue + deltaValue, MIN_VALUE),
          MAX_VALUE,
        );
        this.setState({ value: newValue });
      },
    });

    this.thumbPanResponder1 = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.startValue1 = this.state.value1;
      },
      onPanResponderMove: (_e, gestureState) => {
        const deltaValue =
          (gestureState.dx / SLIDER_WIDTH) * (MAX_VALUE - MIN_VALUE);
        const newValue = Math.min(
          Math.max(this.startValue1 + deltaValue, MIN_VALUE),
          MAX_VALUE,
        );
        this.setState({ value1: newValue });
      },
    });
  }

  private getThumbLeft(value: number): number {
    const ratio = (value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE);
    return ratio * SLIDER_WIDTH;
  }

  render(): React.JSX.Element {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            {this.state.value && +this.state.value.toFixed(3)}
          </Text>
          <View
            testID={'slider'}
            accessibilityLabel={'slider'}
            style={styles.sliderContainer}
          >
            <View style={styles.track}>
              <View
                style={[
                  styles.trackFilled,
                  {
                    width: `${((this.state.value - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) * 100}%`,
                  },
                ]}
              />
            </View>
            <View
              testID={'slider-thumb'}
              accessibilityLabel={'slider-thumb'}
              style={[
                styles.thumb,
                { left: this.getThumbLeft(this.state.value) - THUMB_SIZE / 2 },
              ]}
              {...this.thumbPanResponder.panHandlers}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>
            {this.state.value1 && +this.state.value1.toFixed(3)}
          </Text>
          <View
            testID={'slider1'}
            accessibilityLabel={'slider1'}
            style={styles.sliderContainer}
          >
            <View style={styles.track}>
              <View
                style={[
                  styles.trackFilled,
                  {
                    width: `${((this.state.value1 - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) * 100}%`,
                  },
                ]}
              />
            </View>
            <View
              testID={'slider1-thumb'}
              accessibilityLabel={'slider1-thumb'}
              style={[
                styles.thumb,
                { left: this.getThumbLeft(this.state.value1) - THUMB_SIZE / 2 },
              ]}
              {...this.thumbPanResponder1.panHandlers}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: SLIDER_WIDTH,
    height: THUMB_SIZE,
    margin: 50,
    justifyContent: 'center',
  },
  track: {
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    backgroundColor: '#b3b3b3',
    overflow: 'hidden',
  },
  trackFilled: {
    height: TRACK_HEIGHT,
    backgroundColor: '#4caf50',
  },
  thumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: '#4caf50',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

export default SliderScreen;
