import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
  Platform,
  LayoutChangeEvent,
  PanResponderGestureState,
} from 'react-native';

interface State {
  showDraggable: boolean;
  dropZoneValues: {
    x: number;
    y: number;
    width: number;
    height: number;
  } | null;
  pan: Animated.ValueXY;
}

class DrapAndDrop extends Component<{}, State> {
  private panResponder: any;

  constructor(props: {}) {
    super(props);
    this.renderDraggable = this.renderDraggable.bind(this);
    this.setDropZoneValues = this.setDropZoneValues.bind(this);
    this.isDropZone = this.isDropZone.bind(this);
    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  isDropZone(gesture: PanResponderGestureState): boolean {
    const dz = this.state.dropZoneValues;
    if (!dz) return false;
    return gesture.moveY - 64 > dz.y && gesture.moveY - 64 < dz.y + dz.height;
  }

  renderDraggable(): React.JSX.Element | null {
    if (this.state.showDraggable) {
      return (
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.circle]}
        >
          <Text style={styles.text} testID="dragMe" accessibilityLabel="dragMe">
            Drag me!
          </Text>
        </Animated.View>
      );
    }
    return null;
  }

  setDropZoneValues(event: LayoutChangeEvent): void {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
  }

  render(): React.JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.dragDropContainer}>
          <View
            onLayout={(event: LayoutChangeEvent) =>
              this.setDropZoneValues(event)
            }
            style={styles.dropZone}
            testID="dropzone"
            accessibilityLabel="dropzone"
          >
            <Text style={styles.dropText}>Drop here.</Text>
          </View>
          {this.renderDraggable()}
          <View>
            {!this.state.showDraggable && (
              <View>
                <Text
                  style={styles.dragSuccessLabel}
                  testID="success"
                  accessibilityLabel="success"
                >
                  Circle dropped
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const CIRCLE_RADIUS = 36;
const Window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 64 : 56,
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff',
  },
  dropText: {
    marginTop: 32,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff',
  },
  dragSuccessLabel: {
    marginTop: 125,
    textAlign: 'center',
    color: 'blue',
  },
  dropZone: {
    width: Window.width,
    height: 100,
    backgroundColor: '#2c3e50',
  },
  dragDropContainer: {
    flex: 1,
  },
  circle: {
    backgroundColor: '#1abc9c',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    marginTop: Window.height / 2 - CIRCLE_RADIUS - 100,
    alignSelf: 'center',
  },
});

export default DrapAndDrop;
