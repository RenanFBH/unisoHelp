import { ScrollView,  View, Text, Image, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightToBracket, faPhoneVolume, faComments, faUsers, faCalendar, faGear  } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes';

import styleUnisoHelp from '../components/style';

type NavigationProp = StackNavigationProp<RootStackParamList, "index">

const IndexScreen = () => {

  const navigation = useNavigation<NavigationProp>();

  const btnGuide =()=> {
    navigation.navigate("guide");
  };
  const btnService =()=> {
    navigation.navigate("service");
  };
  const btnForum =()=> {
    navigation.navigate("forum");
  };
  const btnFaculty =()=> {
    navigation.navigate("faculty");
  };
  const btnCalendars =()=> {
    navigation.navigate("calendars");
  };
  const btnSettings =()=> {
    navigation.navigate("settings");
  };

  return(
    <ScrollView style={styleUnisoHelp.bg}>
      <View style={styleUnisoHelp.indexHeader}>
        <Image style={styleUnisoHelp.icon} source={require('../../../assets/img/unisoIcon.png')} />
        <View style={styleUnisoHelp.titleAndSubtitleView}>
          <Text style={styleUnisoHelp.welcomeHeaderIndex}>Bem vindo(a) Aluno!</Text>
          <Text style={styleUnisoHelp.raHeader}>RA 000000</Text>
        </View>
        <Image style={styleUnisoHelp.icon} source={require('../../../assets/img/profile/example.png')} />
      </View>
      <View style={styleUnisoHelp.content}>
        <View style={styleUnisoHelp.buttonGroupIndex}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnGuide()}}>
            <FontAwesomeIcon icon={faRightToBracket} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Guia do calouro</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroupIndex}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnService()}}>
            <FontAwesomeIcon icon={faPhoneVolume} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Atendimento</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroupIndex}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnForum()}}>
            <FontAwesomeIcon icon={faComments} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Fórum</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroupIndex}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnFaculty()}}>
            <FontAwesomeIcon icon={faUsers} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Corpo Docente</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroupIndex}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnCalendars()}}>
            <FontAwesomeIcon icon={faCalendar} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Calendários</Text>
          </Pressable>
        </View>
        <View style={styleUnisoHelp.buttonGroupIndex}>
          <Pressable style={styleUnisoHelp.buttonIndex} onPress={() => {btnSettings()}}>
            <FontAwesomeIcon icon={faGear} size={30} style={styleUnisoHelp.iconButton} />
            <Text style={styleUnisoHelp.textButton}>Configurações</Text>
          </Pressable>
        </View>
        
      </View>
    </ScrollView>
  )
};

export default IndexScreen;