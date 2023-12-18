import {
  ColorValue,
  Image,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {components, Colors, font} from '../Styles';

type Props = {
  color?: ColorValue;
  header?: string;
  hasHeader?: boolean;
  style?: ViewStyle;
  name?: string;
  left?: boolean;
  leftIcon?: any;
  right?: boolean;
  onBack?: () => void;
  onFilter?: () => void;
};
const TopBar = (prop: Props) => {
  const headerText: string = prop.header ? prop.header : 'Header';
  const nameText: string = prop.name ? prop.name : 'Name';
  return (
    <View style={[components.topBarContainer, components.center, prop?.style]}>
      <Text
        style={[
          font.caption,
          {
            color: Colors.active,
            textTransform: 'uppercase',
            display: prop.hasHeader ? 'flex' : 'none',
            marginBottom: 2,
          },
        ]}>
        {headerText}
      </Text>

      <View style={[components.centerSpace, {flexDirection: 'row'}]}>
        <TouchableOpacity onPress={prop.onBack}>
          <Image
            source={prop?.leftIcon || require('../../../assets/icon/24/back.png')}
            style={{opacity: prop.left ? 1 : 0, marginRight: 15}}
          />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={[
              font.headline,
              {
                color: Colors.Main,
                fontSize: prop?.hasHeader ? 22 : 16,
              },
            ]}>
            {nameText}
          </Text>

          <Image 
          style={[{
            transform: [{rotate: '-90deg'}],
            display: prop.hasHeader ? 'flex' : 'none',
            marginLeft: 5,
            width: 18,
            height: 18          }]}
          source={require('../../../assets/icon/24/back.png')} />
        </View>

        <Text
          style={[font.body, {color: Colors.Main, opacity: prop.right ? 1 : 0}]}
          onPress={prop.onFilter}>
          Filter
        </Text>
      </View>
    </View>
  );
};

export default TopBar;
