import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Routes from '../router/Routes';

interface Props {
  navigation?: NavigationProp<any>;
}

class SamplesListScreen extends Component<Props> {
  constructor(props: Props = {}) {
    super(props);
    this.getView = this.getView.bind(this);
    this.goToScreen = this.goToScreen.bind(this);
  }

  goToScreen(screenName: string): void {
    this.props.navigation?.navigate(screenName);
  }

  getView(
    header: string,
    subHeader: string,
    testId: string,
    screenName: string,
  ): React.JSX.Element {
    return (
      <TouchableOpacity
        accessible={false}
        onPress={() => {
          this.goToScreen(screenName);
        }}
        testID={testId}
        accessibilityLabel={testId}
      >
        <View style={styles.itemView}>
          <Text
            style={styles.header}
            testID={testId}
            accessible={true}
            accessibilityLabel={testId}
          >
            {header}
          </Text>
          <Text
            style={styles.subHeader}
            testID={subHeader}
            accessible={true}
            accessibilityLabel={subHeader}
          >
            {subHeader}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render(): React.JSX.Element {
    return (
      <ScrollView testID="scrollView" accessibilityLabel="scrollView">
        <View style={styles.container}>
          {this.getView(
            'Native View',
            'Chained View',
            'chainedView',
            Routes.NativeView.title,
          )}
          {this.getView(
            'Slider',
            'Slide your number',
            'slider1',
            Routes.SliderScreen.title,
          )}
          {this.getView(
            'Vertical swiping',
            'Demos vertical swiping ',
            'verticalSwipe',
            Routes.VerticalSwipe.title,
          )}
          {this.getView(
            'Drag & Drop',
            'Demo drag and drop',
            'dragAndDrop',
            Routes.DragAndDrop.title,
          )}
          {this.getView(
            'Double Tap',
            'Demo double tap button',
            'doubleTap',
            Routes.DoubleTap.title,
          )}
          {this.getView(
            'Long Press',
            'Demo Long press button',
            'longPress',
            Routes.LongPress.title,
          )}
          {this.getView(
            'Photo View',
            'Ping & Zoom',
            'photoView',
            Routes.PhotoScreen.title,
          )}
          {this.getView(
            'Web View',
            'View hacker news',
            'webView',
            Routes.WebViewScreen.title,
          )}
          {this.getView(
            'Carousel',
            'Demos swipe left & right',
            'carousel',
            Routes.CarouselScreen.title,
          )}
          {this.getView(
            'Wheel Picker',
            'Demos wheel picker color',
            'wheelPicker',
            Routes.WheelPicker.title,
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 72,
  },
  itemView: {
    borderBottomWidth: 1,
    borderColor: '#DCDCDC',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 16,
  },
  subHeader: {
    color: '#696969',
  },
});

export default SamplesListScreen;
