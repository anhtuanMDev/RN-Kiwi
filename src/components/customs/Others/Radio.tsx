import {ColorValue, View, ViewStyle} from 'react-native';
import React from 'react';
import {components, font, Colors} from '../Styles';

type Props = {
  checked?: boolean;
  style?: ViewStyle;
  radioColor?: ColorValue;
  indicatorStyle?: ViewStyle;
};

const Radio = (prop: Props) => {
  return (
    <View
      style={[
        {
          width: 24,
          height: 24,
          borderRadius: 12,
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: prop?.checked
            ? prop?.radioColor || Colors.active
            : Colors.gray,
        },
        prop?.style,
      ]}>
      <View
        style={[
          {
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: prop?.radioColor || Colors.active,
            display: prop?.checked ? 'flex' : 'none',
          },
          prop?.indicatorStyle,
        ]}
      />
    </View>
  );
};

export default Radio;
