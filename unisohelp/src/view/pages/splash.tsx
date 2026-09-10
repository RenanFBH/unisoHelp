import { View, ImageBackground  } from 'react-native';
import styleUnisoHelp from '../components/style'



const splashScreen =(navigation: any)=> {
  return (
    <View style={styleUnisoHelp.bg}>
      <View style={styleUnisoHelp.splashContent}>
        <ImageBackground style={styleUnisoHelp.logo} resizeMode="cover" source={require('../../../assets/img/jargyTech.png')} />
      </View>
    </View>
  )
}

export default splashScreen;