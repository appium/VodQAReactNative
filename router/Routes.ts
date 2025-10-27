interface RouteConfig {
  title: string;
}

interface Routes {
  LoginScreen: RouteConfig;
  SamplesListScreen: RouteConfig;
  CarouselScreen: RouteConfig;
  PhotoScreen: RouteConfig;
  WebViewScreen: RouteConfig;
  SliderScreen: RouteConfig;
  VerticalSwipe: RouteConfig;
  DragAndDrop: RouteConfig;
  DoubleTap: RouteConfig;
  LongPress: RouteConfig;
  NativeView: RouteConfig;
  WheelPicker: RouteConfig;
}

const routes: Routes = {
  LoginScreen: {
    title: 'Login',
  },
  SamplesListScreen: {
    title: 'Samples List',
  },
  CarouselScreen: {
    title: 'Carousel - Swipe left/right',
  },
  PhotoScreen: {
    title: 'Photos - Ping & Zoom',
  },
  WebViewScreen: {
    title: 'Webview',
  },
  SliderScreen: {
    title: 'Slider',
  },
  VerticalSwipe: {
    title: 'Vertical swiping',
  },
  DragAndDrop: {
    title: 'Drag & Drop',
  },
  DoubleTap: {
    title: 'Double Tap Demo',
  },
  LongPress: {
    title: 'Long Press Demo',
  },
  NativeView: {
    title: 'Native View Demo',
  },
  WheelPicker: {
    title: 'Wheel Picker Demo',
  },
};

export default routes;
