import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Muhammad Ikbal</Text>
      <BalComponent />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  )
}

const BalComponent = () => {
  return <Text>Bal</Text>
}

function Photo() {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}} />
}

export default App
