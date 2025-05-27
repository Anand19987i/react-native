import { Dimensions, Platform } from 'react-native';
import { theme } from '../constant/theme';

export const isWeb = Platform.OS === 'web';
export const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const responsiveValue = (values) => {
  if (isWeb) {
    if (SCREEN_WIDTH >= theme.breakpoints.desktop) return values.desktop || values.tablet || values.mobile;
    if (SCREEN_WIDTH >= theme.breakpoints.tablet) return values.tablet || values.mobile;
    return values.mobile;
  }
  return values.mobile;
};