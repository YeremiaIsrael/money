import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Header,Inputs,Button} from '../../components'

const SignIn = ({navigation}) => {
  return(
      <View style={style.container}>
        <Header title="Sign In" pLeft={24}/>
        <View style={style.line}/>
        <Inputs titles="Email Address" holder="Type your email"/>
        <Inputs titles="Password" holder="Type your password"/>
        <View style={{marginVertical:10}}/>
        <Button title="Sign In" color='#02cf8e' weight='bold' tColor='#000' />
        <Button title="Create New Account" color='#8d92a3' tColor='#fff' weight='500'/>
      </View>
  )
}

export default SignIn;

const style = StyleSheet.create({
  container:{
    backgroundColor:"#fff",flex:1
  },
  line:{
    backgroundColor:'#fafafc',
    height:24,
    marginBottom:15
  }
})
