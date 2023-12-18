import {Text, View, ColorValue, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Colors, components, font} from '../Styles';

type Props = {
  backgroundColor?: ColorValue;
  color?: ColorValue;
  getText?: (text: string) => void;
};

const CodeFill = (props: Props) => {
  const [text, setText] = useState('');
  return (
    <View
      style={[
        components.codeFillContainer,
        components.center,
        components.square,
        {backgroundColor: props.backgroundColor},
      ]}>
      <TextInput
        style={[
          font.body,
          {
            color: props.color,
            backgroundColor: Colors.input,
            width: 50,
            height: 50,
            borderBottomColor: Colors.Main,
            borderBottomWidth: 1
          },
        ]}
        value={text}
        onChangeText={text => {
          setText(text);
          props.getText && props.getText(text);
        }}
      />
    </View>
  );
};

export default CodeFill;
