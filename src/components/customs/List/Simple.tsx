import {
  TouchableOpacity,
  Text,
  ViewStyle,
  Image,
  View,
  TextStyle,
} from 'react-native';
import React from 'react';
import {components, font, Colors} from '../Styles';

type Props = {
  title?: string;
  font?: TextStyle | TextStyle[];
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
};

const Simple = (prop: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => prop?.onPress && prop?.onPress()}
      style={[components.list, {height: 48, borderColor: Colors.semiWhite, borderBottomWidth: 1},prop?.style]}>
      <Text
        style={[
          font.body,
          {width: '80%', fontWeight: '600', color: Colors.Main},
          prop?.font,
        ]}>
        {prop?.title || 'Link with Social'}
      </Text>

      <Image source={require('../../../assets/icon/24/forward.png')} />
    </TouchableOpacity>
  );
};

export default Simple;
