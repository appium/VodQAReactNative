import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface State {
  colors: string[];
  selectedColor: string;
}

class WheelPicker extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'black'],
      selectedColor: 'red',
    };
    this.handleOnValueChnage = this.handleOnValueChnage.bind(this);
  }

  onValueChange(key: string, value: any): void {
    const newState: any = {};
    newState[key] = value;
    this.setState(newState);
  }

  handleOnValueChnage(color: string): void {
    this.setState({
      selectedColor: color,
    });
  }

  render(): React.JSX.Element {
    const PickerItem = Picker.Item;
    const Window = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.colorDisplay,
            {
              backgroundColor: this.state.selectedColor,
              width: Window.width,
            },
          ]}
        >
          <Text style={styles.colorText}>
            {' '}
            Current Color: {this.state.selectedColor}{' '}
          </Text>
        </View>
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={this.state.selectedColor}
          onValueChange={(color: string) => this.handleOnValueChnage(color)}
        >
          {this.state.colors.map((s, i) => (
            <PickerItem key={i} value={s} label={s} />
          ))}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 64 : 56,
    marginBottom: Platform.OS === 'ios' ? 200 : 350,
  },
  colorDisplay: {
    height: 50,
    justifyContent: 'center',
  },
  colorText: {
    textAlign: 'center',
    color: 'white',
  },
  picker: {
    width: 320,
  },
});

export default WheelPicker;
