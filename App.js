import React from 'react'
import { ScrollView, View } from 'react-native'
import CardProductExample from './CardProductExample'
import SampleComponent from './SampleComponent'
import StylingReactNativeComponent from './StylingReactNativeComponent'

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingReactNativeComponent />
        <CardProductExample />
      </ScrollView>
    </View>
  )
}

export default App
