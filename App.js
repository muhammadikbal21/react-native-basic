import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Muhammad Ikbal</Text>
      <BalComponent />
    </View>
  )
}

const BalComponent = () => {
  return <Text>Bal</Text>
}

export default App
