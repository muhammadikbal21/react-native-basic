import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import ProfileYoutubeExample from './ProfileYoutubeExample'

class FlexBoxClass extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{flexDirection: 'row', margin: 10, backgroundColor: 'gray'}}>
            <View style={{backgroundColor: 'red', width: 50, height: 50}} />
            <View style={{backgroundColor: 'yellow', flex: 1, height: 100}} />
            <View style={{backgroundColor: 'green', flex: 2, height: 150}} />
            <View style={{backgroundColor: 'blue', flex: 3, height: 200}} />
          </View>
          <View style={{flexDirection: 'row', margin: 10, backgroundColor: 'gray', alignItems: 'center'}}>
            <View style={{backgroundColor: 'red', width: 50, height: 50}} />
            <View style={{backgroundColor: 'yellow', flex: 1, height: 100}} />
            <View style={{backgroundColor: 'green', flex: 2, height: 150}} />
            <View style={{backgroundColor: 'blue', flex: 3, height: 200}} />
          </View>
          <View style={{flexDirection: 'column', margin: 10}}>
            <View style={{backgroundColor: 'red', flex: 1, height: 100}} />
            <View style={{backgroundColor: 'yellow', flex: 1, height: 100}} />
            <View style={{backgroundColor: 'green', flex: 1, height: 100}} />
            <View style={{backgroundColor: 'blue', flex: 1, height: 100}} />
          </View>
          <ProfileYoutubeExample />
        </ScrollView>
      </View>
    )
  }
}

export default FlexBoxClass
