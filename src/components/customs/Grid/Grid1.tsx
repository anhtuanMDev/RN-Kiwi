import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {Colors, font, components} from '../Styles';

type Props = {
  name?: string;
  image?: any;
  type1?: string;
  type2?: string;
  time?: string;
  deliveryFee?: string;
  rate?: string | number;
  onPress?: () => void;
  style?: ViewStyle;
};

const Grid1 = (prop: Props) => {
  return (
    <TouchableOpacity style={[components.grid, prop?.style]}>
      <ImageBackground
        borderRadius={10}
        source={prop?.image || require('../../../assets/img/grid1.png')}
        style={[components.grid1, {justifyContent: 'flex-end'}]}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 4}}>
          <Image
            source={require('../../../assets/icon/24/fast-delivery.png')}
            style={{marginRight: 5, tintColor: Colors.white}}
          />
          <Text style={[font.caption, {color: Colors.white}]}>
            {prop?.time || '25min'}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/icon/24/delivery.png')}
              style={{marginRight: 5, tintColor: Colors.white}}
            />
            <Text style={[font.caption, {color: Colors.white}]}>
              {prop?.deliveryFee || 'Free'}
            </Text>
          </View>

          <View style={[components.boxRate, components.center]}>
          <Text style={[font.caption, {color: Colors.white}]}>
            {prop?.rate || '4.5'}
            </Text>
        </View>
        </View>
      </ImageBackground>

      <Text
        style={[
          font.subline,
          {
            fontWeight: '700',
            color: Colors.Main,
            marginTop: 10,
            marginBottom: 4,
          },
        ]}>
        {prop?.name || "McDonald's"}
      </Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[font.body, {color: Colors.gray}]}>
          {prop?.type1 || 'Chinese'}
        </Text>
        <View style={[components.dot, {marginHorizontal: 10}]} />
        <Text style={[font.body, {color: Colors.gray}]}>
          {prop?.type2 || 'American'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Grid1;
