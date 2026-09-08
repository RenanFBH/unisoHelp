import { ScrollView,  View, Text, Image, Pressable } from 'react-native';

import styleUnisoHelp from './css/style';

const IndexScreen =()=> {
  return(
    <ScrollView style={styleUnisoHelp.bg}>
      <View style={styleUnisoHelp.indexHeader}>
        <Image style={styleUnisoHelp.icon} source={require('./img/unisoIcon.png')} />
        <View style={styleUnisoHelp.titleAndSubtitleView}>
          <Text style={styleUnisoHelp.welcomeHeader}>Bem vindo(a) Aluno!</Text>
          <Text style={styleUnisoHelp.raHeader}>RA 000000</Text>
        </View>
        <Image style={styleUnisoHelp.icon} source={require('./img/profile/example.png')} />
      </View>
      <View style={styleUnisoHelp.content}>
        <View style={styleUnisoHelp.buttonGroupIndex}>
          <Pressable style={styleUnisoHelp.buttonIndex}>
            <Text>Guia do calouro</Text>
          </Pressable>
        </View>
        
        
      </View>
    </ScrollView>
  )
}

export default IndexScreen;