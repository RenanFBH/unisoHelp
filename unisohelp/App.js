import * as React from 'react'
import { View } from 'react-native';


import SplashScreen from './components/splash';
import LoginScreen  from './components/login';
import IndexScreen from './components/index';
import SettingsScreen from './components/settings';

const App =()=> {
  


  return (
    <View>
      <LoginScreen/>
    </View>
  );
}

export default App;

