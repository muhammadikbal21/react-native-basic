import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascript = () => {

  // tipe data:
  // 1. primitive
  const name = 'Muhammad Ikbal' // string
  let usia = 25 // integer (number)
  const isMale = true // boolean

  // 2. complex
  const pet = {
    name: 'Miaw',
    age: 2,
    isLocalPride: true,
    color: 'kuning',
    parents: {
      male: 'Kaisar',
      female: 'Kuin'
    }
  } // object

  const sayHello = (name, age) => {
    return console.log(`Halo ${name}, umurmu ${age} tahun `);
  } // function
  sayHello("Ikbal", 25) // call function

  const names = ["Muhammad", "Ikbal", "Bal", "Balebale"] // array

  // conditional
  if (pet.name === "Miaw") {
    console.log("Halo Miaw");
  } else {
    console.log("Kamu siapa? Kamu siapa? aaah.. kamu siapaa..??");
  }

  const sayPet = (petAnimal) => {
    // let say = ''
    // if (petAnimal.name === "Miaw") {
    //   say = "Halo Miaw, apa kabar?"
    // } else {
    //   say = "Nani kore??"
    // }
    // return say

    // simple code
    return petAnimal.name === "Miaw" ? "Halo Miaw, apa kabar?" : "Nani kore??"
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript di React Native</Text>
      <Text>Nama : {name}</Text>
      <Text>Age: {usia}</Text>
      <Text>{sayPet(pet)}</Text>
      <Text>=====</Text>
      <Text>Ini Mapping Array</Text>
      {
        names.map(name => (
          <Text>{name}</Text>
        ))
      }
    </View>
  )
}

export default BasicJavascript

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center'
  }
})
