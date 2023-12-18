import { TouchableOpacity, Text, ViewStyle, Image, View } from 'react-native'
import React from 'react'
import {components, font, Colors} from '../Styles';
import Toggles from '../Others/Toggles';

type Props = {
    subline?: string;
    header?: string;
    icon?: any;
    style?: ViewStyle;
    onPress?: () => void;
    check?: boolean;
  };

const Toggle = (prop: Props) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.8}
    onPress={()=> prop?.onPress && prop?.onPress()}
    style={[components.lists, prop?.style]}>
      <Image source={prop?.icon || require('../../../assets/icon/24/notify.png')} />

      <View style={[{width: '73%'}]}>
        <Text style={[font.body, {color: Colors.Main}]}>{prop?.header || 'Link with Social'}</Text>
        <Text style={[font.subhead, {width: '80%', color: Colors.gray}]}>
        {prop?.subline || 'Add Facebook, Twitter etc '}
        </Text>
      </View>

      <Toggles checked={prop?.check}/>

      </TouchableOpacity>
  )
}

export default Toggle