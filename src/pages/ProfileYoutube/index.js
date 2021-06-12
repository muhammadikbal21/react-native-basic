import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class ProfileYoutube extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
        <Image
          source={{
            uri: 'https://yt3.ggpht.com/ytc/AAUvwnjUYREXyIybrDSt3O7nEzlTbi-nZr22sG_BoXnU=s176-c-k-c0x00ffffff-no-rj',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 10}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Muse Indonesia</Text>
          <Text>3,01 jt subscriber</Text>
        </View>
      </View>
    );
  }
}

export default ProfileYoutube;
