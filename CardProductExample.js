import React from 'react'
import { Image, Text, View } from 'react-native'
import tech from './tech.jpg'

const CardProductExample = () => {
  return (
    <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
      <Image source={tech} style={{width: 188, height: 107, borderRadius: 8}} />
      <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
        New iPad 2021
      </Text>
      <Text style={{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f2994a',
        marginTop: 12
      }}>
        Rp. 25.000.000
      </Text>
      <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
        Jakarta Selatan
      </Text>
      <View style={{
        backgroundColor: '#6fcf97',
        paddingVertical: 6,
        borderRadius: 25,
        marginTop: 20
      }}>
        <Text style={{
          fontSize: 14,
          fontWeight: '600',
          color: 'white',
          textAlign: 'center'
        }}>BELI</Text>
      </View>
    </View>
  )
}

export default CardProductExample