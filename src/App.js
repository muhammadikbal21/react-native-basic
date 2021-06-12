import React from 'react'
import { ScrollView, View } from 'react-native'
import CardProduct from './pages/CardProduct'
import FlexBox from './pages/FlexBox'
import Position from './pages/Position'
import SampleComponent from './pages/SampleComponent'
import StylingComponent from './pages/StylingComponent'

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <CardProduct />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  )
}

export default App
