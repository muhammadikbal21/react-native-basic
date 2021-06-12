import React from 'react'
import { ScrollView, View } from 'react-native'
import CardProductExample from './CardProductExample'
import FlexBoxClass from './FlexBoxClass'
import PositionReactNative from './PositionReactNative'
import SampleComponent from './SampleComponent'
import StylingReactNativeComponent from './StylingReactNativeComponent'

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <CardProductExample />
        <FlexBoxClass /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  )
}

export default App
