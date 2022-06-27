import React from "react"
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking
} from "react-native"

const colorGithub = "#010409"
const colorFontGitHub = "#C9D1D9";
const colorDarkFontGitHub = "#4F565E";
const ImageProfileGitHub = "https://avatars.githubusercontent.com/u/102971900?v=4";
const urltoGitHub = "https://github.com/IsadoraPerdigao";

const App = () => {

  const handlePressGoToGitHub = async () => {
    console.log("Verificando link");
    const res = await Linking.canOpenURL(urltoGitHub);
    
    if(res) {
      console.log("link aprovado");
      console.log("abrindo link");
      await Linking.openURL(urltoGitHub);
    }
  };

  return (
  <SafeAreaView style={style.container}>
    <StatusBar backgroundColor={colorGithub} barStyle="light-content"></StatusBar>
    <View style={style.content}>
      <Image accessibilityLabel="Foto de rosto de Isadora com fundo branco" style={style.avatar} source={{uri: ImageProfileGitHub}}/>
      <Text 
       accessibilityLabel="Nome: Isadora Perdigão" style={[style.defaultText, style.name]}>Isadora Perdigão</Text>
      <Text
       accessibilityLabel= "Nickname: IsadoraPerdigao" style={[style.defaultText, style.nickName]}>IsadoraPerdigao</Text>
      <Text
       accessibilityLabel= "Descrição: Programming student starting to get to know this wide universe a little better each day." style={[style.defaultText, style.description]}>Programming student starting to get to know this wide universe a little better each day.</Text>

       <Pressable onPress={(handlePressGoToGitHub)}>
        <View style={style.button}>
          <Text style={[style.defaultText, style.textButton]}>Open GitHub</Text>
        </View>
       </Pressable>
    </View>

  </SafeAreaView> // Impede o componente de sair para uma área que ele não tenha acesso.
  )
};

export default App;

const style = StyleSheet.create({
  container: { //Column
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: "center",
    alignItems: "center"
    //flexDirection: "row" muda a disposição dos itens de coluna para linha.
  },
  content: {
    alignItems: "center",
    padding: 20,

  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  defaultText:{
    color: colorFontGitHub,
  },
  name:{
    marginTop: 20,
    fontSize:24,
    fontWeight: "bold"
  },
  nickName:{
    fontSize: 18,
    color: colorDarkFontGitHub,
  },
  description:{
    fontSize: 14,
    fontWeight: "bold"
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius:10,
    padding: 20,
  },
  textButton:{
    fontSize: 16,
    fontWeight: "bold"
  }
});