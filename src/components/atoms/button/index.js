import React from 'react'
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

const Button = ({title,color,tColor,weight,onPress}) => {

  const styles = StyleSheet.create({
    container:{
      paddingVertical:16,
      borderRadius:8,
      marginVertical:10,
      backgroundColor:color
    }
  })

  return (
    <View style={{paddingHorizontal:24}}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
            <Text style={{textAlign:'center',fontWeight:weight,fontSize:16,color:tColor}}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>

  )

}

export default Button
