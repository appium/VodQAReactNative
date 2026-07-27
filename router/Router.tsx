import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import CarouselScreen from '../screens/CarouselScreen';
import DoubleTap from '../screens/DoubleTap';
import DrapAndDrop from '../screens/DrapAndDrop';
import LoginScreen from '../screens/LoginScreen';
import LongPress from '../screens/LongPress';
import NativeView from '../screens/NativeView';
import PhotoScreen from '../screens/PhotoScreen';
import SamplesListScreen from '../screens/SamplesListScreen';
import SliderScreen from '../screens/SliderScreen';
import VerticalSwipe from '../screens/VerticalSwipe';
import WebViewScreen from '../screens/WebViewScreen';
import WheelPicker from '../screens/WheelPicker';
import Routes from './Routes';

const Stack = createStackNavigator();

function Router(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.LoginScreen.title}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#26aa5c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen
          name={Routes.LoginScreen.title}
          component={LoginScreen}
          options={{title: Routes.LoginScreen.title}}
        />
        <Stack.Screen
          name={Routes.SamplesListScreen.title}
          component={SamplesListScreen}
          options={{title: Routes.SamplesListScreen.title}}
        />
        <Stack.Screen
          name={Routes.CarouselScreen.title}
          component={CarouselScreen}
          options={{title: Routes.CarouselScreen.title}}
        />
        <Stack.Screen
          name={Routes.PhotoScreen.title}
          component={PhotoScreen}
          options={{title: Routes.PhotoScreen.title}}
        />
        <Stack.Screen
          name={Routes.WebViewScreen.title}
          component={WebViewScreen}
          options={{title: Routes.WebViewScreen.title}}
        />
        <Stack.Screen
          name={Routes.SliderScreen.title}
          component={SliderScreen}
          options={{title: Routes.SliderScreen.title}}
        />
        <Stack.Screen
          name={Routes.VerticalSwipe.title}
          component={VerticalSwipe}
          options={{title: Routes.VerticalSwipe.title}}
        />
        <Stack.Screen
          name={Routes.DragAndDrop.title}
          component={DrapAndDrop}
          options={{title: Routes.DragAndDrop.title}}
        />
        <Stack.Screen name={Routes.DoubleTap.title} component={DoubleTap} options={{title: Routes.DoubleTap.title}} />
        <Stack.Screen name={Routes.LongPress.title} component={LongPress} options={{title: Routes.LongPress.title}} />
        <Stack.Screen
          name={Routes.NativeView.title}
          component={NativeView}
          options={{title: Routes.NativeView.title}}
        />
        <Stack.Screen
          name={Routes.WheelPicker.title}
          component={WheelPicker}
          options={{title: Routes.WheelPicker.title}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
