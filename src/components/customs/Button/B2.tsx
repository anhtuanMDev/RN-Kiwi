import {
  ColorValue,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {font, components} from '../Styles';

type Props = {
  type?: 'Facebook' | 'Google';
  color?: ColorValue;
  title?: string;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

const B2 = (prop: Props) => {
  const type: boolean = prop.type === 'Facebook' ? true : false;
  return (
    <TouchableOpacity
      style={[components.center, components.b2, prop.style]}
      onPress={() => prop.onPress && prop.onPress()}
      activeOpacity={0.6}>
      <Image
        source={
          type
            ? require('../../../assets/icon/facebook.png')
            : require('../../../assets/icon/google.png')
        }
        style={components.b2Icon}
      />

      <Text
        style={[
          font.caption,
          components.b2Text,
          {
            color: prop.color || 'white',
            textTransform: 'uppercase'
          },
        ]}>
        {prop.title || 'Button'}
      </Text>
    </TouchableOpacity>
  );
};

export default B2;
