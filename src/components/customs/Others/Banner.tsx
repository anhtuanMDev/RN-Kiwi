import { View, Text, Image, ImageBackground, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { Colors, font, components } from '../Styles'

type Props = {
    headline?: string;
    subline?: string;
    image?: any;
    onPress?: () => void;
    style?: ViewStyle | ViewStyle[];
}

const Banner = (prop: Props) => {
    const headline: string = "Free Delivery for 1 Month!";
    const subline: string = "You’ve to order at least $10 for using free delivery for 1 month.";
  return (
    <TouchableOpacity onPress={prop?.onPress} style={prop?.style}>
    <ImageBackground source={prop?.image || require('../../../assets/img/banner.png')} style={[components.banner]}>
        
        <Text style={[font.h2Title, {width: 220, color: Colors.Main}]}>
            {prop?.headline || headline}
        </Text>
        <Text style={[font.body, {width: 230, color: Colors.Main}]}>
            {prop?.subline || subline}
        </Text>

    </ImageBackground>
    </TouchableOpacity>
  )
}

export default Banner