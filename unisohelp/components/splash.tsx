import { View, ImageBackground  } from 'react-native';

import styleUnisoHelp from './css/style'

const splashScreen =()=> {
  return (
    <View style={styleUnisoHelp.bg}>
      <View style={styleUnisoHelp.splashContent}>
        <ImageBackground style={styleUnisoHelp.logo} resizeMode="cover" source={require('./img/jargyTech.png')} />
      </View>
    </View>
  )
}

export default splashScreen;