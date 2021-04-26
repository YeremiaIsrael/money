import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header = ({title,pLeft}) => {
  const style = StyleSheet.create({
    container:{
      justifyContent:"center",
      paddingLeft:pLeft,
      height:108,
      width:360
    },
    text:{
      fontSize:22
    }
  })

  return (
    <View>
      <View style={style.container}>
        <Text style={style.text}>{title}</Text>
      </View>
    </View>
  )
}

export default Header;
