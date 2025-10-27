import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Alert } from 'react-native';
import { create } from '../helpers/PlatformSpecificStyles';

const DOUBLE_PRESS_DELAY = 300;

interface State {
  timeLastPressed: number | undefined;
}

class DoubleTap extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.handleDoubleTap = this.handleDoubleTap.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      timeLastPressed: undefined,
    };
  }

  handleDoubleTap(): void {
    Alert.alert('Double Tap', 'Double tap successful!', [
      { text: 'OK', onPress: () => {} },
    ]);
  }

  handleClick(): void {
    const now = new Date().getTime();
    if (
      this.state.timeLastPressed &&
      now - this.state.timeLastPressed < DOUBLE_PRESS_DELAY
    ) {
      this.setState({ timeLastPressed: undefined });
      this.handleDoubleTap();
    }
    this.setState({ timeLastPressed: now });
  }

  render(): React.JSX.Element {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.handleClick}
          style={styles.button}
          testID={'doubleTapMe'}
          accessibilityLabel={'doubleTapMe'}
        >
          <View>
            <Text style={styles.buttonText}>Double Tap Me</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    padding: 16,
    backgroundColor: '#0D77B7',
    marginHorizontal: 24,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DoubleTap;
