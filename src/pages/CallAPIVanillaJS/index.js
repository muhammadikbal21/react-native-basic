import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CallAPIVanillaJS = () => {

  useEffect(() => {
    // Call API dengan Method GET
    // fetch('https://jsonplaceholder.typicode.com/todos/1') // dari JSON Placeholder
    fetch('https://reqres.in/api/users?page=2') // dari Reqres
    .then(response => response.json())
    .then(json => console.log(json))
    
    // Call API dengan Method POST
    const data = {
      name: "morpheus",
      job: "leader"
    }

    console.log("data object: ", data);
    console.log("data stringify: ", JSON.stringify(data));

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // harus di parsing ke string dengan menggunakan JSON.stringify
    })
    .then(response => response.json())
    .then(json => console.log('post response: ', json))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Vanilla JS</Text>
    </View>
  )
}

export default CallAPIVanillaJS

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center'
  }
})
