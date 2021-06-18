import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import BasicJavascript from './pages/BasicJavascript'
import CallAPIAxios from './pages/CallAPIAxios'
import CallAPIVanillaJS from './pages/CallAPIVanillaJS'
import CardProduct from './pages/CardProduct'
import FlexBox from './pages/FlexBox'
import LocalAPI from './pages/LocalAPI'
import Position from './pages/Position'
import Props from './pages/Props'
import PropsAndStateIntegration from './pages/PropsAndStateIntegration'
import ReactNativeSvg from './pages/ReactNativeSvg'
import SampleComponent from './pages/SampleComponent'
import State from './pages/State'
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
        {/* <Props /> */}
        {/* <State /> */}
        {/* <PropsAndStateIntegration /> */}
        {/* <BasicJavascript /> */}
        {/* <ReactNativeSvg /> */}
        {/* <CallAPIVanillaJS /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  )
}

export default App
