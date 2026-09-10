import * as React from 'react'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/view/pages/splash';
import LoginScreen  from './src/view/pages/login';
import IndexScreen from './src/view/pages/index';
import GuideScreen from './src/view/pages/guide'
import SettingsScreen from './src/view/pages/settings';

export type RootStackParamList  = {
  splash: undefined;
  login: undefined;
  index: undefined;
  guide: undefined;
  settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList >();

const Routes =()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="index" component={IndexScreen} options={{headerShown: false}}/>
        <Stack.Screen name="guide" component={GuideScreen} options={{headerShown: false}}/>
        <Stack.Screen name="settings" component={SettingsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;