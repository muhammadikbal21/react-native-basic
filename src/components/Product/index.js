import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tech from '../../assets/images/tech.jpg'

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={tech} style={styles.imageProduct} />
      <Text style={styles.productName}>New iPad 2021</Text>
      <Text style={styles.productPrice}>Rp. 25.000.000</Text>
      <Text style={styles.location}>Jakarta Selatan</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  wrapper: {
    padding: 12, 
    backgroundColor: '#f2f2f2', 
    width: 212, 
    borderRadius: 8
  },
  imageProduct: {
    width: 188, 
    height: 107, 
    borderRadius: 8
  },
  productName: {
    fontSize: 14, 
    fontWeight: 'bold', 
    marginTop: 16
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 12
  },
  location: {
    fontSize: 12, 
    fontWeight: '300', 
    marginTop: 12
  },
  buttonWrapper: {
    backgroundColor: '#6fcf97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  }
})
