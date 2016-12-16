import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
    
} from 'react-native'

class DrapAndDrop extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.text}>Drap and drop coming soon!</Text>
            </View>
           
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center'
    }
})


export default DrapAndDrop