import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native'


const Item = (props) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={{uri: `https://i.pravatar.cc/150?u=${props.email}`}} style={styles.avatar} />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{props.name}</Text>
        <Text style={styles.descEmail}>{props.email}</Text>
        <Text style={styles.descStack}>{props.stack}</Text>
      </View>
      <TouchableOpacity onPress={props.onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const LocalAPI = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [stack, setStack] = useState('')
  const [users, setUsers] = useState([])
  const [button, setButton] = useState('Simpan')
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const onSubmit = () => {
    const data = {
      name: name,
      email: email,
      stack: stack
    }
    console.log('data before send: ', data);
    // IP alias dari emulator
    // http://localhost:3004/users menjadi http://10.0.2.2:3004/users

    if (button === 'Simpan') {
      axios.post('http://10.0.2.2:3004/users', data)
      .then(res => {
        console.log('data after send: ', res);
        setName('')
        setEmail('')
        setStack('')
        getData()
      })
      .catch(err => {
        console.log('error: ', err);
      })
    } else if (button === 'Update') {
      axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
      .then(res => {
        console.log('data after update: ', res);
        setName('')
        setEmail('')
        setStack('')
        getData()
        setButton('Simpan')
      })
      .catch(err => {
        console.log('error: ', err);
      })
    }
  }

  const getData = () => {
    axios.get('http://10.0.2.2:3004/users')
    .then(res => {
      console.log('get data API: ', res);
      setUsers(res.data)
    })
    .catch(err => {
      console.log('error: ', err);
    })
  }

  const selectedItem = (item) => {
    console.log('selected item: ', item);
    setName(item.name)
    setEmail(item.email)
    setStack(item.stack)
    setButton('Update')
    setSelectedUser(item)
  }

  const deleteItem = (item) => {
    console.log(item);
    axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
    .then(res => {
      console.log('delete item: ', res);
      getData()
    })
    .catch(err => {
      console.log('error: ', err);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API JSON</Text>
      <Text style={styles.textTitle}>Form Trainee Bootcamp Batch 6</Text>
      <TextInput style={styles.input} placeholder="Nama Lengkap" value={name} onChangeText={(value) => setName(value)} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(value) => setEmail(value)} />
      <TextInput style={styles.input} placeholder="Stack" value={stack} onChangeText={(value) => setStack(value)} />
      <Button title={button} onPress={onSubmit} />
      <View style={styles.line} />
      {
        users.map((user) => {
          return (
            <Item 
              key={user.id} 
              name={user.name} 
              email={user.email} 
              stack={user.stack} 
              onPress={() => selectedItem(user)}
              onDelete={() => Alert.alert(
                'Peringatan',
                'Anda yakin akan menghapus user ini?',
                [
                  {
                    text: 'Tidak',
                    onPress: () => console.log('button tidak')
                  },
                  {
                    text: 'Ya',
                    onPress: () => deleteItem(user)
                  }
                ]
              )}
            />
          )
        })
      }
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
