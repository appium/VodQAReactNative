import React, { Component } from 'react';
import {
    Text,
    Dimensions,
    View
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
const { width, height } = Dimensions.get('window');

class CarouselScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: { width, height },
        };
    }

    render() {
        return (
            <View>
                <Carousel
                    style={this.state.size}
                    pageInfo
                    >
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
                        testID="view1"
                        accessibilityLabel="view1">
                        <View style={[{ backgroundColor: '#BADA55', borderRadius: 10, width: 200, height: 200, justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{color: 'white', fontSize: 36}}>1</Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
                        testID="view2"
                        accessibilityLabel="view2">
                        <View style={[{ backgroundColor: '#DDAA55', borderRadius: 10, width: 200, height: 200, justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{color: 'white', fontSize: 36}}>2</Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
                        testID="view3"
                        accessibilityLabel="view3">
                        <View style={[{ backgroundColor: '#1111CC', borderRadius: 10, width: 200, height: 200, justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{color: 'white', fontSize: 36}}>3</Text>
                        </View>
                    </View>
                </Carousel>
            </View>
        );
    }
}

export default CarouselScreen;