import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const CallAPIVanillaJS = () => {

  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: ''
  })

  const [dataJob, setDataJob] = useState({
    name: '',
    job: ''
  })

  useEffect(() => {
    // Call API dengan Method GET
    // fetch('https://jsonplaceholder.typicode.com/todos/1') // dari JSON Placeholder
    // fetch('https://reqres.in/api/users?page=2') // dari Reqres
    // .then(response => response.json())
    // .then(json => console.log(json))
    
    // // Call API dengan Method POST
    // const data = {
    //   name: "morpheus",
    //   job: "leader"
    // }

    // console.log("data object: ", data);
    // console.log("data stringify: ", JSON.stringify(data));

    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data) // harus di parsing ke string dengan menggunakan JSON.stringify
    // })
    // .then(response => response.json())
    // .then(json => console.log('post response: ', json))
  }, [])

  const getData = () => {
    // Call API dengan Method GET
    fetch('https://reqres.in/api/users/2') // dari Reqres
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setDataUser(json.data)
    })
  }

  const postData = () => {
    // // Call API dengan Method POST
    const data = {
      name: "morpheus",
      job: "leader"
    }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // harus di parsing ke string dengan menggunakan JSON.stringify
    })
    .then(response => response.json())
    .then(json => {
      console.log('post response: ', json)
      setDataJob(json)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Vanilla JS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
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
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  }
})
