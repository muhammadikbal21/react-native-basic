import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={style.text}>Styling Component</Text>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'red',
        marginTop: 20,
        marginLeft: 20
      }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40
  }
})

export default StylingReactNativeComponent