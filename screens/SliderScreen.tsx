import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface State {
  value: number;
}

class SliderScreen extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render(): React.JSX.Element {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            {this.state.value && +this.state.value.toFixed(3)}
          </Text>
          <Slider
            testID={'slider'}
            accessibilityLabel={'slider'}
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            onValueChange={(value: number) => this.setState({ value })}
          />
        </View>
        <View>
          <Text style={styles.text}>
            {this.state.value && +this.state.value.toFixed(3)}
          </Text>
          <Slider
            testID={'slider1'}
            accessibilityLabel={'slider1'}
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            onValueChange={(value: number) => this.setState({ value })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    width: 300,
    margin: 50,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

export default SliderScreen;
