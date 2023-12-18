import {Text, ViewStyle, View} from 'react-native';
import React, {useState} from 'react';
import {components, font, Colors} from '../Styles';
import Radio from '../Others/Radio';

type Props = {
  title?: string;
  style?: ViewStyle;
  check?: boolean;
};

const Choices = (prop: Props) => {
  return (
    <View
      style={[components.list, {paddingVertical: 14}, prop?.style]}>
      <Radio checked={prop?.check} />

      <Text style={[font.body, {width: '90%', color: Colors.Main}]}>
        {prop?.title || 'California'}
      </Text>
    </View>
  );
};

export default Choices;
