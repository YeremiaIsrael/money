import React,{useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {SplashLogo} from '../../assets'

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('SignIn');
    },2000)
  },[])
  return (
    <View style={style.page}>
      <SplashLogo/>
      <Text style={style.text}>Money Tracker</Text>
    </View>
  )
}

export default SplashScreen;

const style = StyleSheet.create({
  page:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#02cf8e'
  },
  text:{
    fontSize:30,
    fontWeight:"bold"
  }
})
