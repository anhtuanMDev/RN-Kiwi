import {TouchableOpacity, Text, ViewStyle, Image, View} from 'react-native';
import React from 'react';
import {components, font, Colors} from '../Styles';

type Props = {
  header?: string;
  subline?: string;
  logo?: any;
  style?: ViewStyle;
  onPress?: () => void;
};

const Payment = (prop: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => prop?.onPress && prop?.onPress()}
      style={[components.lists, prop?.style]}>
      <Image source={prop?.logo || require('../../../assets/icon/paypal.png')} />

      <View style={[{width: '70%'}]}>
        <Text style={[font.body, {color: Colors.Main}]}>
          {prop?.header || 'Paypal'}
        </Text>
        <Text style={[font.subhead, {width: '80%', color: Colors.gray}]}>
          {prop?.subline || 'Deafult Payment'}
        </Text>
      </View>

      <Image source={require('../../../assets/icon/24/forward.png')} />
    </TouchableOpacity>
  );
};

export default Payment;
