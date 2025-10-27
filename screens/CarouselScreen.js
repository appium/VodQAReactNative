import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class CarouselScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Horizontal ScrollView Carousel</Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={[styles.slide, styles.slide1]}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={[styles.slide, styles.slide2]}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={[styles.slide, styles.slide3]}>
            <Text style={styles.text}>3</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    backgroundColor: '#BADA55',
  },
  slide2: {
    backgroundColor: '#DDAA55',
  },
  slide3: {
    backgroundColor: '#1111CC',
  },
  text: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
  },
});

export default CarouselScreen;
