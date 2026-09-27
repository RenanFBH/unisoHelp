import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen  from './src/view/pages/login';
import IndexScreen from './src/view/pages/index';
import GuideScreen from './src/view/pages/guide';
import ServiceScreen from './src/view/pages/service';
import FacultyScreen from './src/view/pages/faculty';
import CalendarsScreen from './src/view/pages/calendars';
import SettingsScreen from './src/view/pages/settings';

export type RootStackParamList  = {
  login: undefined;
  index: undefined;
  guide: undefined;
  service: undefined;
  forum: undefined;
  faculty: undefined;
  calendars: undefined;
  settings: undefined;
  accessibility: undefined;
  profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList >();

const Routes =()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="settings">
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="index" component={IndexScreen} options={{headerShown: false}}/>
        <Stack.Screen name="guide" component={GuideScreen} options={{headerShown: false}}/>
        <Stack.Screen name="service" component={ServiceScreen} options={{headerShown: false}}/>
        <Stack.Screen name="faculty" component={FacultyScreen} options={{headerShown: false}}/>
        <Stack.Screen name="calendars" component={CalendarsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="settings" component={SettingsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;