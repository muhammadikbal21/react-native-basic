import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cart from '../../components/Cart'
import Product from '../../components/Product'

const PropsAndStateIntegration = () => {

  const [totalQuantity, setTotalQuantity] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Komunikasi antar Component dengan Props dan State</Text>
      <Cart quantity={totalQuantity} />
      <Product onButtonPress={() => setTotalQuantity(totalQuantity + 1)} />
    </View>
  )
}

export default PropsAndStateIntegration

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center'
  }
})
