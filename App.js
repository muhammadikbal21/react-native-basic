import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <View>
      <Text>Muhammad Ikbal</Text>
      <BalComponent />
    </View>
  )
}

const BalComponent = () => {
  return <Text>Bal</Text>
}

export default App
