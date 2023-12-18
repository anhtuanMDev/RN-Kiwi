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
  style?: ViewStyle;
  name?: string;
  icon?: any;
  onBack?: () => void;
  onFilter?: () => void;
};
const TopBar = (prop: Props) => {
  const nameText: string = prop.name ? prop.name : 'Name';
  return (
    <View style={[components.homeBarContainer, prop?.style]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          <Text
            style={[
              font.subline,
              {
                color: Colors.Main,
                fontSize: 22,
              },
            ]}>
            {nameText}
          </Text>
      </View>
    </View>
  );
};

export default TopBar;
