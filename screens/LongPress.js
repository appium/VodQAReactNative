import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Alert 
} from 'react-native'
import { create } from '../helpers/PlatformSpecificStyles'


class LongPress extends Component {

    constructor(props) {
        super(props)
        this.handleLongPress = this.handleLongPress.bind(this)
    }
    handleLongPress() {
        Alert.alert('Long Pressed',
            'you pressed me hard :P',
            [
                { text: 'OK', onPress: () => { } },
            ])
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.HeaderText}>Long press the Botton</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onLongPress ={this.handleLongPress} >
                    <Text style={styles.buttonText}>Long Press Me</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1 
    },
    HeaderText: {
        fontSize: 18,
        fontWeight: 'bold'
        
    },
   button: {
       padding: 16,
       backgroundColor: '#0D77B7',
       marginHorizontal: 24,
       alignSelf: 'stretch'
   },
   buttonText: {
       color: '#fff',
       textAlign: 'center',
       fontSize: 14,
       fontWeight: 'bold'

   }
})
export default LongPress