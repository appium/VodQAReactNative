import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    PanResponder

} from 'react-native'

class DrapAndDrop extends Component {
    constructor(props) {
        super(props)
        this.renderDraggable = this.renderDraggable.bind(this)
        this.setDropZoneValues = this.setDropZoneValues.bind(this)
        this.isDropZone = this.isDropZone.bind(this)
        this.state = {
            showDraggable: true,     
            dropZoneValues: null,
            pan: new Animated.ValueXY()
        }
        this.panResponder = PanResponder.create({    
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {
                dx: this.state.pan.x,
                dy: this.state.pan.y
            }]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropZone(gesture)) {
                    this.setState({
                        showDraggable: false,

                    })
                } else {
                    Animated.spring(
                        this.state.pan,
                        { toValue: { x: 0, y: 0 } }
                    ).start()
                }
            }
        })
    }
    isDropZone(gesture) {     
        var dz = this.state.dropZoneValues
        return (gesture.moveY - 64) > dz.y && (gesture.moveY - 64) < dz.y + dz.height
    }
    renderDraggable() {
        if (this.state.showDraggable) {     
            return (
                <View testID="draggableContainer"
                    style={styles.draggableContainer} >
                    <Animated.View
                        {...this.panResponder.panHandlers}
                        style={[this.state.pan.getLayout(), styles.circle]}>
                        <Text style={styles.text}>Drag me!</Text>
                    </Animated.View>
                </View>
            )
        }
    }
    setDropZoneValues(event) {     
        this.setState({
            dropZoneValues: event.nativeEvent.layout
        })
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: 64 }}>
                <View onLayout={(event) => this.setDropZoneValues(event)}
                    testID="dropZone"
                    style={styles.dropZone}>
                    <Text style={styles.draggableText} >Drop here.</Text>
                </View>
                {this.renderDraggable()}
                <View>
                    {!this.state.showDraggable &&
                        <View>
                            <Text style={styles.dragSuccessLabel}>Circle dragged sucessfully!</Text>
                        </View>
                    }</View>
            </View>
        )
    }
}
let CIRCLE_RADIUS = 36
let Window = Dimensions.get('window')
var styles = StyleSheet.create({
    text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        color: '#fff'
    },
    draggableText: {
        flex: 1, textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: '#fff'
    },
    dragSuccessLabel: {
        marginTop: 125, textAlign: 'center', color: 'blue'
    },
    dropZone: {
        width: 380,
        height: 100,
        backgroundColor: '#2c3e50',
       
    },
    draggableContainer: {
        position: 'absolute',
        top: Window.height / 2 - CIRCLE_RADIUS - 165,
        left: Window.width / 2 - CIRCLE_RADIUS,
    },
    circle: {
        backgroundColor: '#1abc9c',
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
})


export default DrapAndDrop