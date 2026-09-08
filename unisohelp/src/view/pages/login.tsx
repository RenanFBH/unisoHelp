import * as React from 'react';
import { View, Text, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styleUnisoHelp from '../components/style';



const LoginScreen =()=> {

  const navigation = useNavigation();

  const [rememberPress, setRemember] = React.useState("unchecked");
  const [btnPress, setBtn] = React.useState("unpressed");
  const [ra, setRa] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ScrollView style={styleUnisoHelp.bg}>
      <View style={styleUnisoHelp.loginHeader}>
        <Image style={styleUnisoHelp.icon} source={require('../../../assets/img/unisoIcon.png')} />
        <View style={styleUnisoHelp.titleAndSubtitleView}>
          <Text style={styleUnisoHelp.titleHeader}>UNISO Help</Text>
          <Text style={styleUnisoHelp.subtitleHeader}>Universidade de Sorocaba</Text>
        </View>
      </View>
      <View style={styleUnisoHelp.content}>
        <View style={styleUnisoHelp.loginContent}>
          <View style={styleUnisoHelp.headerCard}>
            <Text style={styleUnisoHelp.titleCard}>Login</Text>
          </View>
          <View style={styleUnisoHelp.contentCard}>
            <TextInput style={styleUnisoHelp.input} placeholder="RA" onChangeText={(text) => {setRa(text)}}/>
            <TextInput style={styleUnisoHelp.input} placeholder="Senha" secureTextEntry={true} onChangeText={(text) => {setPassword(text)}}/>
          </View>
          <View style={styleUnisoHelp.footerCard}>
            <View style={styleUnisoHelp.options}>
              <View style={styleUnisoHelp.remember}>
                <RadioButton 
                  status={ rememberPress === "checked" ? "checked" : "unchecked" } 
                  onPress={ rememberPress === "checked" ? () => {setRemember("unchecked")} : () => {setRemember("checked")} }
                  color="#1E3ABA"
                  unchecked="#fff"
                />
                <Text style={styleUnisoHelp.textRemember}>Lembrar-me</Text>
              </View>
              <View style={styleUnisoHelp.questions}>
                 <Pressable>
                <Text style={styleUnisoHelp.textQuestions}>Dúvidas?</Text>
               </Pressable>
              </View>
            </View>
            <View style={styleUnisoHelp.button}>
              <Pressable 
                style={styleUnisoHelp.buttonCard} 
                onPress={() => {navigation.navigate("index")}}         
              >
                <Text style={styleUnisoHelp.textButtonCard}>Entrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;

