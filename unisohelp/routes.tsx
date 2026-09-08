import * as React from 'react'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/view/pages/splash';
import LoginScreen  from './src/view/pages/login';
import IndexScreen from './src/view/pages/index';
import SettingsScreen from './src/view/pages/settings';

const Stack = createStackNavigator();

const Routes =()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="index" component={IndexScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

