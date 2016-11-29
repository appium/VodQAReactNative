import React, { Component } from 'react'
import LoginScreen from '../screens/LoginScreen'
import SamplesListScreen from '../screens/SamplesListScreen'
import CarouselScreen from '../screens/CarouselScreen'

import {
    Navigator,
    StatusBar,
    StyleSheet,
    View
} from 'react-native'
import Routes from './Routes'

class Router extends Component {

    constructor(props) {
        super(props)
        this.renderScene = this.renderScene.bind(this)
    }

    renderScene(route, navigator) {
        switch (route.title) {
            case Routes.LoginScreen.title:
                return (<LoginScreen navigator={navigator} />)
            case Routes.SamplesListScreen.title:
                return (<SamplesListScreen navigator={navigator} />)
            case Routes.CarouselScreen.title:
                return (<CarouselScreen navigator={navigator} />)
            default:
                return
        }
    }

    render() {
        const routes = [
            { title: Routes.LoginScreen.title },
            { title: Routes.SamplesListScreen.title },
            { title: Routes.CarouselScreen.title },
        ]
        // todo status bar styling in correct place. 
        return (
            <View style={styles.mainContainer}> 
                <StatusBar
                    barStyle="light-content"
                    />
                <Navigator
                    style={{ backgroundColor: '#181618' }}
                    initialRoute={routes[0]}
                    initialRouteStack={routes}
                    renderScene={this.renderScene}
                    />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})
export default Router