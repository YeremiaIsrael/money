import React from 'react'
import {View,TextInput as Input,StyleSheet,Text} from 'react-native'

const Inputs = ({titles,holder,values}) => {
  return (
    <View style={{paddingHorizontal:24,paddingVertical:10}}>
      <Text style={style.title}>{titles}</Text>
      <Input style={style.input} placeholder={holder} value={values}/>
    </View>
  )
}

export default Inputs;

const style = StyleSheet.create({
  input:{
    paddingLeft:10,
    color:"#8d92a3",
    borderRadius:8,
    borderColor:"#000",
    borderWidth:1,
    marginTop:5
  },
  title:{
    color:"#020202",
    fontSize:16
  }
})
