import {View, Text, Image, ViewStyle} from 'react-native';
import React from 'react';
import {components, font, Colors} from '../Styles';

type Props = {
  state?: string;
  city?: string;
  style?: ViewStyle
};

const Address = (prop:Props) => {
  return (
    <View style={[components.list, prop?.style]}>
      <Image source={require('../../../assets/icon/24/location.png')} />
      <View style={[{width: '90%'}]}>
        <Text style={[font.body, {color: Colors.Main}]}>{prop?.city || 'San Francisco'}</Text>
        <Text style={[font.subhead, {width: '80%', color: Colors.gray}]}>
        {prop?.state || 'California'}
        </Text>
      </View>
    </View>
  );
};

export default Address;
