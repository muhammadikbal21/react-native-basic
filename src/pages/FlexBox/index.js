import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ProfileYoutube from '../ProfileYoutube'

class FlexBox extends Component {

  constructor(props) {
    super(props)
    console.log("ini constructor");
    this.state = {
      subscriber: 200
    }
  }

  // disini tempat untuk mengupdate setelah proses render pertama telah dipanggil
  componentDidMount() {
    console.log("ini component did mount");
    setTimeout(() => {
      this.setState({
        subscriber: 400
      })
    }, 2_000);
  }

  // ini dipanggil ketika ada perubahan dan akan merender ulang component ketika ada perubahan
  // jika tidak ada perubahan maka ini tidak akan dipanggil
  componentDidUpdate() {
    console.log("ini component did update");
  }

  // ini dipanggil ketika component hilang atau dilepas, sama konsepnya dengan component did update
  componentWillUnmount() {
    console.log("ini component will unmount");
  }

  render() {
    console.log("ini render");
    return (
      <View>
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
        <Text>{this.state.subscriber} Subscriber</Text>
        <ProfileYoutube />
      </View>
    )
  }
}

export default FlexBox
