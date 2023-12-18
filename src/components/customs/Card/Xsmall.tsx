import {TouchableOpacity, Text, ViewStyle, ImageBackground} from 'react-native';
import React from 'react';
import {Colors, font, components} from '../Styles';

type Props = {
  name?: string;
  image?: any;
  onPress?: () => void;
  style?: ViewStyle;
};

const Xsmall = (prop: Props) => {
  return (
    <TouchableOpacity style={prop?.style} onPress={()=> prop.onPress && prop.onPress()}>
      <ImageBackground
        borderRadius={8}
        source={prop?.image || require('../../../assets/img/fastFood.png')}
        style={[components.cardXsmall, components.center, prop.style]}>
        <Text style={[font.subline, {color: Colors.white}]}>
          {prop?.name || 'Fast Food'}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Xsmall;
