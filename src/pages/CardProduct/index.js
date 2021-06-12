import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import tech from '../../assets/images/tech.jpg'

const CardProduct = () => {

  const [price, setPrice] = useState(25)

  // useEffect dijalankan secara berurutan
  
  // useEffect(() => {
  //   console.log("use effect did mount");
  // }, [])
  
  // useEffect(() => {
  //   console.log("use effect did update");
  //   setTimeout(() => {
  //     setPrice(40)
  //   }, 2_000);
  // }, [price]) 
  
  // lifecycle dalam 1 useEffect
  useEffect(() => {
    console.log("use effect did mount");
    setTimeout(() => {
      setPrice(40)
    }, 5_000);
    return () => {
      console.log("use effect did update");
    }
  }, [price]) // kurung siku ini berfungsi ketika ada perubahan value dia akan ke-trigger

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
        Rp. {price}.000.000
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

export default CardProduct