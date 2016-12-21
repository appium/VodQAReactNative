import React, { Component } from 'react'
import LoginScreen from '../screens/LoginScreen'
import SamplesListScreen from '../screens/SamplesListScreen'
import CarouselScreen from '../screens/CarouselScreen'
import PhotoScreen from '../screens/PhotoScreen'
import WebViewScreen from '../screens/WebViewScreen'
import SliderScreen from '../screens/SliderScreen'
import DrapAndDrop from '../screens/DrapAndDrop'
import VerticalSwipe from '../screens/VerticalSwipe'
import DoubleTap from '../screens/DoubleTap'


import {
    Navigator,
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
            case Routes.PhotoScreen.title:
                return (<PhotoScreen navigator={navigator} />)
            case Routes.WebViewScreen.title:
                return (<WebViewScreen navigator={navigator} />)
            case Routes.SliderScreen.title:
                return (<SliderScreen navigator={navigator} />)
            case Routes.VerticalSwipe.title:
                return (<VerticalSwipe navigator={navigator} />)
            case Routes.DragAndDrop.title:
                return (<DrapAndDrop navigator={navigator} />)
            case Routes.DoubleTap.title:
                return (<DoubleTap navigator={navigator} />)
            default:
                return
        }
    }

    renderTitle(route) {
        return (
            <View style={styles.title}>
                <Text style={styles.titleText}>{route.title}</Text>
            </View>
        )
    }

    renderLeftButton(route, navigator) {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigator.pop()
                    } }
                    style={{ paddingVertical: 12, paddingLeft: 8 }}>
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
            { title: Routes.PhotoScreen.title },
            { title: Routes.WebViewScreen.title },
            { title: Routes.SliderScreen.title },
            { title: Routes.VerticalSwipe.title },
        ]
        // todo status bar styling in correct place. 
        return (

            <View style={styles.mainContainer}> 
                <Navigator
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
    },
   title: {
       paddingTop: 12,
   },
   titleText: {
       color: '#fff',
       fontSize: 18
   }
})
export default Router