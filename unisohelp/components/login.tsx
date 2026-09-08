import * as React from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styleUnisoHelp from './css/style';

const LoginScreen =()=> {
  
  const [rememberPress, setRemember] = React.useState("unchecked");
  const [btnPress, setBtn] = React.useState("unpressed");

  return (
    <View style={styleUnisoHelp.bg}>
      <View style={styleUnisoHelp.loginHeader}>
        <Image style={styleUnisoHelp.icon} source={require('./img/unisoIcon.png')} />
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
            <TextInput style={styleUnisoHelp.input} placeholder="RA"/>
            <TextInput style={styleUnisoHelp.input} placeholder="Senha" secureTextEntry={true}/>
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
                onPress={() => {setBtn("pressed")}}         
              >
                <Text style={styleUnisoHelp.textButtonCard}>Entrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

