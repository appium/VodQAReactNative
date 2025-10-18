import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ImageViewing from 'react-native-image-viewing';

class PhotoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const images = [
      {
        uri: 'https://prelrik.files.wordpress.com/2016/06/appium.jpg?w=640',
      },
    ];

    return (
      <View style={styles.container} testID="photo" accessibilityLabel="photo">
        <Text>Photo Screen</Text>
        <TouchableOpacity onPress={() => this.setState({visible: true})}>
          <Image
            source={{
              uri: 'https://prelrik.files.wordpress.com/2016/06/appium.jpg?w=640',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <ImageViewing
          images={images}
          imageIndex={0}
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default PhotoScreen;
