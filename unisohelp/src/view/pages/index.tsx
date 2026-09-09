import { ScrollView,  View, Text, Image, Pressable } from 'react-native';

import styleUnisoHelp from '../components/style';

const IndexScreen =()=> {
  return(
    <ScrollView style={styleUnisoHelp.bg}>
      <View style={styleUnisoHelp.indexHeader}>
        <Image style={styleUnisoHelp.icon} source={require('../../../assets/img/unisoIcon.png')} />
        <View style={styleUnisoHelp.titleAndSubtitleView}>
          <Text style={styleUnisoHelp.welcomeHeader}>Bem vindo(a) Aluno!</Text>
          <Text style={styleUnisoHelp.raHeader}>RA 000000</Text>
        </View>
        <Pressable>
          <Image style={styleUnisoHelp.icon} source={require('../../../assets/img/unisoIcon.png')} />
        </Pressable>
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
};

export default IndexScreen;