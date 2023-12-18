import {View, Text, Image, ViewStyle, ColorValue, TextStyle} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../customs/Styles';

type Props = {
  name?: string | undefined;
  icon?: any;
  dot?: ViewStyle | ViewStyle[];
  style?: ViewStyle | ViewStyle[];
  font?: TextStyle | TextStyle[];
  tint?: ColorValue;
  showIcon?: boolean;
};

const Tag = (prop: Props) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        prop?.style,
      ]}>
      <View style={[components.dot, {marginHorizontal: 10}, prop?.dot]} />

      <Image
        style={[{tintColor: prop?.tint || Colors.gray, marginRight: 5, display: prop?.showIcon ? 'flex' : 'none'}]}
        source={prop?.icon || require('../../../assets/icon/24/delivery.png')}
      />

      <Text
        style={[
          font.caption,
          {textAlign:'center'},
          prop?.font,
        ]}>
        {prop?.name || 'Free'}
      </Text>
    </View>
  );
};

export default Tag;
