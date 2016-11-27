import React, { Component } from 'react'
import LoginScreen from '../screens/LoginScreen'
import SamplesListScreen from '../screens/SamplesListScreen'
import CarouselScreen from '../screens/CarouselScreen'

import {
    Navigator,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
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

    renderTitle(route) {
        return (
            <View style={{ paddingTop: 12 }}>
                <Text style={{ color: 'white' }}>{route.title}</Text>
            </View>
        )
    }

    renderLeftButton(route, navigator) {
        return (
            <View style={{ paddingTop: 12, paddingLeft: 8 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigator.pop()
                    } }>
                    <Text style={{ color: 'white' }}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderNavBar() {
        return (
            <Navigator.NavigationBar
                routeMapper={{
                    LeftButton: (route, navigator, index, navState) =>
                    { return this.renderLeftButton(route, navigator, index, navState) },
                    RightButton: (route, navigator, index, navState) =>
                    { return },
                    Title: (route, navigator, index, navState) => {
                        return this.renderTitle(route, navigator, index, navState)
                    },
                }}
                style={{ backgroundColor: '#26aa5c' }}
                />
        )
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
                    style={{ backgroundColor: 'white' }}
                    initialRoute={routes[0]}
                    initialRouteStack={routes}
                    renderScene={this.renderScene}
                    navigationBar={this.renderNavBar()}
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