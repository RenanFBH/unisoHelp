import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styleUnisoHelp = StyleSheet.create({
  //estilos de blocos
  //geral
  bg: {
    width: width * 1,
    height: height * 1,
    backgroundColor:"#EEE",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",   
  },
  
  //splashScreen
  splashContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //login
  loginHeader: {
    height: height * 0.2,
    backgroundColor: "#fff",
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    paddingTop: height * 0.08,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  titleAndSubtitleView: {
    flex:1,
  },
  loginContent: {
    width: width * 0.9,
    height: height * 0.4,
    backgroundColor: "#ffff",
    marginTop: height * 0.1,
    marginBottom: height * 0.25,
    borderRadius: 17, 
    padding: 20,
  },
  headerCard: {

  },
  contentCard: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  footerCard: {
    
  },
  options: {
    flex: 1,
    flexDirection: "row",
    padding: 15,

  },
  remember: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  questions: {
    flex: 1,
    alignItems: "end",
    
  },
  //index
  indexHeader: {
    height: height * 0.2,
    backgroundColor: "#fff",
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    paddingTop: height * 0.08,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  buttonGroupIndex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },


  //estilos de objetos
  //geral

  //splashScreen
  logo: {
    width: 500,
    height: 100,
  },

  //login
  icon: {
    width: 80,
    height: 80,
    padding: 0,
  },
  titleHeader: {
    color: "#1E3ABA",
    fontSize: 30,
    fontWeight: 700,
  },
  subtitleHeader: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 400,
  },
  input: {
    width: width * 0.8,
    height: height * 0.06,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#1E3ABA",
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
  titleCard: {
    color: "#1E3ABA",
    fontSize: 30,
    fontWeight: 700,
  },
  buttonCard: {
    width: width * 0.8,
    height: height * 0.06,
    backgroundColor: "#FFD000",
    borderWidth: 2,
    borderColor: "#1E3ABA",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonCard: {
    color: "#1E3ABA",
    fontSize: 20,
  },
  textRemember: {
    color: "#1E3ABA",
    fontSize: 17,
  },
  textQuestions: {
    color: "#1E3ABA",
    fontSize: 17,
  },
  //index
  welcomeHeader: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 700,
  },
  raHeader: {
    color: "#1E3ABA",
    fontSize: 20,
    fontWeight: 400,
  },
  buttonIndex: {
      width: width * 0.9,
      height: height * 0.2,
      backgroundColor: "#fff",
      borderWidth: 2,
      borderRadius: 27,
      borderColor: "#1E3ABA",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      
  },
  

});

export default styleUnisoHelp;