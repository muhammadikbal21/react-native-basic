import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import CardProduct from './pages/CardProduct'
import FlexBox from './pages/FlexBox'
import Position from './pages/Position'
import Props from './pages/Props'
import SampleComponent from './pages/SampleComponent'
import StylingComponent from './pages/StylingComponent'

const App = () => {

  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false)
    }, 6_000);
  }, [])

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {
          // isShow && <CardProduct />
        }
        {
          // jika kondisi true maka akan memanggil component FlexBox
          // isShow && <FlexBox />
        }
        {/* <Position /> */}
        <Props />
      </ScrollView>
    </View>
  )
}

export default App
