import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const Cash = ({title,cash}) => {
  return (
    <View style={{marginTop:10}}>
      <View style={style.container2}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.rupiahs}>{cash}</Text>
      </View>
    </View>

  )
}

export default Cash

const style = StyleSheet.create({
  container2:{
    alignItems:'flex-start',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingRight:96,
  },
  title:{
    fontSize:14
  },
  rupiahs:{
    fontSize:18,
    fontWeight:"bold"
  }
})
