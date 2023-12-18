import {View, Text, Image, ViewStyle} from 'react-native';
import React from 'react';
import {styles, font, Colors, components} from '../../customs/Styles';

type Props = {
  name?: string;
  value?: number | string;
  icon?: any;
  style?: ViewStyle | ViewStyle[];
};

const Mock = (prop: Props) => {
  return (
    <View
      style={[
        {
          width: 75,
          flexDirection: 'row',
        },
        prop?.style,
      ]}>
      <Image
        resizeMode="contain"
        source={require('../../../assets/icon/active.png')}
        style={[components.square, {marginRight: 10, marginTop: 5, width: 18, height: 24}]}
      />
      <Image
        resizeMode="contain"
        source={prop?.icon || require('../../../assets/icon/24/delivery.png')}
        style={[
          components.square,
          {
            width: 20,
            height: 20,
            position: 'absolute',
            left: 3,
            top: 8,
            tintColor: Colors.active,
          },
        ]}
      />

      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={[font.body, {color: Colors.Main, fontWeight: '700',alignSelf: 'flex-start'}]}>
          {prop?.value || 'Free'}
        </Text>
        <Text style={[font.caption, {color: Colors.Main,alignSelf: 'flex-start'}]}>
          {prop?.name || 'Delivery'}
        </Text>
      </View>
    </View>
  );
};

export default Mock;
