import {
  Text,
  ColorValue,
  ViewStyle,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {font, components, Colors} from '../Styles';

type Props = {
  color?: ColorValue;
  title?: string;
  icon?: any;
  showIcon?: boolean;
  tint?: ColorValue;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

const B1 = (prop: Props) => {
  return (
    <TouchableOpacity
      style={[
        components.center,
        components.b1,
        {flexDirection: 'row'},
        prop.style,
      ]}
      onPress={() => prop.onPress && prop.onPress()}
      activeOpacity={0.6}>
      <Image
        style={{
          tintColor: prop?.tint || Colors.active,
          display: prop.showIcon ? 'flex' : 'none',
          marginRight: 8
        }}
        source={prop.icon || require('../../../assets/icon/34/location.png')}
      />
      <Text style={[font.button, {color: prop.color || 'white'}]}>
        {prop.title || 'Button'}
      </Text>
    </TouchableOpacity>
  );
};

export default B1;
