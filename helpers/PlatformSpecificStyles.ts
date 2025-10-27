import {
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle;

interface PlatformStyle {
  ios?: Style;
  android?: Style;
  [key: string]: any;
}

interface Styles {
  [key: string]: PlatformStyle | Style;
}

export function create(styles: Styles): any {
  const platformStyles: { [key: string]: Style } = {};
  Object.keys(styles).forEach(name => {
    let { ios, android, ...style } = { ...styles[name] } as any;
    if (ios && Platform.OS === 'ios') {
      style = { ...style, ...ios };
    }
    if (android && Platform.OS === 'android') {
      style = { ...style, ...android };
    }

    if (name === 'ios' && Platform.OS === 'ios') {
      Object.keys(style).forEach(styleName => {
        if (platformStyles[styleName]) {
          platformStyles[styleName] = {
            ...platformStyles[styleName],
            ...style[styleName],
          };
        }
      });
    }

    if (name === 'android' && Platform.OS === 'android') {
      Object.keys(style).forEach(styleName => {
        if (platformStyles[styleName]) {
          platformStyles[styleName] = {
            ...platformStyles[styleName],
            ...style[styleName],
          };
        }
      });
    }

    if (name !== 'ios' && name !== 'android') {
      platformStyles[name] = style;
    }
  });

  return StyleSheet.create(platformStyles);
}
