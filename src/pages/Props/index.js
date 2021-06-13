import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image source={{
        uri: props.image,
      }} style={{
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderColor: 'black',
        borderWidth: 2
      }} />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.name}</Text>
    </View>
  )
}

const Props = () => {
  return (
    <View>
      <Text>Materi Props</Text>
      {/* scrollview horizontal agar dapat scroll ke kanan */}
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/s150x150/195235359_1165467537304091_6688896269398134565_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_ohc=L-Vu1oQs724AX-i9f_p&edm=AGW0Xe4BAAAA&ccb=7-4&oh=da25f73299e357f4b3fdc52ea3543e8e&oe=60CCDD17&_nc_sid=acd11b"
          name="NEWS" />
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/s150x150/197763619_965370304274479_1781995326864237616_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_ohc=-BgXwl_BsacAX_L_7iC&edm=AGW0Xe4BAAAA&ccb=7-4&oh=483437a421df9ce2cda7f8888ef6894d&oe=60CC7C9B&_nc_sid=acd11b"
          name="YouTube" />
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/s150x150/88224795_2258492841120051_8524438689081692820_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_ohc=83CrshsKLCoAX97mwg6&edm=AGW0Xe4BAAAA&ccb=7-4&oh=2ad5565df07cd82766da3390cfb9eb16&oe=60CD1DF8&_nc_sid=acd11b"
          name="解禁" />
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e35/c90.603.1044.1044a/s150x150/102932142_1383907331806273_8338772879069529806_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jf1sxP3YCVMAX988_Mo&edm=AGW0Xe4BAAAA&ccb=7-4&oh=b40e1d9fedd01ebb1fc9cae505339f93&oe=60C7AE49&_nc_sid=acd11b"
          name="#東リベ質問" />
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e15/c24.342.667.667a/s150x150/120092984_1447119248817894_4747719470630268473_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=QGzTUZsMTXUAX-x8wOt&edm=AGW0Xe4BAAAA&ccb=7-4&oh=bba703d04f4d5dbbc7a36f2fa35af8b4&oe=60C7BE30&_nc_sid=acd11b"
          name="原画展" />
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e15/c24.342.667.667a/s150x150/120092984_1447119248817894_4747719470630268473_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=QGzTUZsMTXUAX-x8wOt&edm=AGW0Xe4BAAAA&ccb=7-4&oh=bba703d04f4d5dbbc7a36f2fa35af8b4&oe=60C7BE30&_nc_sid=acd11b"
          name="原画展" />
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e15/c24.342.667.667a/s150x150/120092984_1447119248817894_4747719470630268473_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=QGzTUZsMTXUAX-x8wOt&edm=AGW0Xe4BAAAA&ccb=7-4&oh=bba703d04f4d5dbbc7a36f2fa35af8b4&oe=60C7BE30&_nc_sid=acd11b"
          name="原画展" />
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e15/c24.342.667.667a/s150x150/120092984_1447119248817894_4747719470630268473_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=QGzTUZsMTXUAX-x8wOt&edm=AGW0Xe4BAAAA&ccb=7-4&oh=bba703d04f4d5dbbc7a36f2fa35af8b4&oe=60C7BE30&_nc_sid=acd11b"
          name="原画展" />
          <Story 
          image="https://instagram.fcgk6-2.fna.fbcdn.net/v/t51.2885-15/e15/c24.342.667.667a/s150x150/120092984_1447119248817894_4747719470630268473_n.jpg?tp=1&_nc_ht=instagram.fcgk6-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=QGzTUZsMTXUAX-x8wOt&edm=AGW0Xe4BAAAA&ccb=7-4&oh=bba703d04f4d5dbbc7a36f2fa35af8b4&oe=60C7BE30&_nc_sid=acd11b"
          name="原画展" />
        </View>
      </ScrollView>
    </View>
  )
}

export default Props

const styles = StyleSheet.create({})
