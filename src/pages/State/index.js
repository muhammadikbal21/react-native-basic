import React, { Component, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CounterFunctional = () => {

  const [number, setNumber] = useState(0)

  return (
    <View>
      <Text>{number}</Text>
      <Button title="+" onPress={() => setNumber(number + 1)} />
    </View>
  )
}

class CounterClass extends Component {

  state = {
    number: 0
  }

  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button title="+" onPress={() => this.setState({number: this.state.number + 1})} />
      </View>
    )
  }
}

const State = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi State Dinamis</Text>
      <Text style={styles.titleSection}>Functional Component</Text>
      <CounterFunctional />
      <CounterFunctional />
      <Text style={styles.titleSection}>Class Component</Text>
      <CounterClass />
      <CounterClass />
    </View>
  )
}

export default State

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center'
  },
  titleSection: {
    marginTop: 20
  }
})
