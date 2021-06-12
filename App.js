import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import tech from './tech.jpg'

const App = () => {
  return (
    <CardProductExample />
  )
}

const CardProductExample = () => {
  return (
    <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
      <Image source={tech} style={{width: 188, height: 107, borderRadius: 8}} />
      <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
        New iPad 2021
      </Text>
      <Text style={{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f2994a',
        marginTop: 12
      }}>
        Rp. 25.000.000
      </Text>
      <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
        Jakarta Selatan
      </Text>
      <View style={{
        backgroundColor: '#6fcf97',
        paddingVertical: 6,
        borderRadius: 25,
        marginTop: 20
      }}>
        <Text style={{
          fontSize: 14,
          fontWeight: '600',
          color: 'white',
          textAlign: 'center'
        }}>BELI</Text>
      </View>
    </View>
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
