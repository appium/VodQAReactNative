import React, { Component } from 'react'
import {
    Text,
    Dimensions,
    View
} from 'react-native'
import Carousel from 'react-native-looped-carousel'
const { width, height } = Dimensions.get('window')

class CarouselScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            size: { width, height },
        }
    }

    render() {
        return (
            <View>
                <Carousel
                    delay={2000}
                    style={this.state.size}
                    autoplay
                    pageInfo
                    onAnimateNextPage={(p) => console.log(p)}
                    >
                    <View style={[{ backgroundColor: '#BADA55' }]}>
                        <Text>1</Text>
                    </View>
                    <View style={[{ backgroundColor: '#DDAA55' }]}>
                        <Text>2</Text>
                    </View>
                    <View style={[{ backgroundColor: '#1111CC' }]}>
                        <Text>3</Text>
                    </View>
                </Carousel>
            </View>
        )
    }
}

export default CarouselScreen