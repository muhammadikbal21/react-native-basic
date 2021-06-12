import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

const App = () => {
  return (
    <StylingReactNativeComponent />
  )
}

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

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Muhammad Ikbal</Text>
      <BalComponent />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

const BalComponent = () => {
  return <Text>Bal</Text>
}

function Photo() {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}} />
}

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{uri: 'https://placeimg.com/100/100/nature'}} style={{width: 100, height: 100, borderRadius: 50}} />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
      </View>
    ) 
  }
}

export default App
