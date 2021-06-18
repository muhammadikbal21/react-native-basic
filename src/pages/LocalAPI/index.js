import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'


const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: 'https://i.pravatar.cc/150?u=fsfdada@pravatar.com'}} style={styles.avatar} />
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama</Text>
        <Text style={styles.descEmail}>email</Text>
        <Text style={styles.descStack}>stack</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  )
}

const LocalAPI = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [stack, setStack] = useState('')

  const onSubmit = () => {
    const data = {
      name: name,
      email: email,
      stack: stack
    }
    console.log('data before send: ', data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API JSON</Text>
      <Text style={styles.textTitle}>Form Trainee Bootcamp Batch 6</Text>
      <TextInput style={styles.input} placeholder="Nama Lengkap" value={name} onChangeText={(value) => setName(value)} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(value) => setEmail(value)} />
      <TextInput style={styles.input} placeholder="Stack" value={stack} onChangeText={(value) => setStack(value)} />
      <Button title="Simpan" onPress={onSubmit} />
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </View>
  )
}

export default LocalAPI

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 20
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18
  },
  itemContainer: {
    flexDirection: 'row', marginBottom: 20
  },
  desc: {
    marginLeft: 18,
    flex: 1
  },
  descName: {
    fontSize: 20, fontWeight: 'bold'
  },
  descEmail: {
    fontSize: 16
  },
  descStack: {
    fontSize: 12, marginTop: 8
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
})
