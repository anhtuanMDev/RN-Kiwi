import {View, TouchableOpacity, Image, TextInput, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {Colors, font, components} from '../Styles';

type Props = {
  placeholder?: string;
  icon?: any;
  onFocused?: () => void;
  onBlur?: () => void;
  style?: ViewStyle | ViewStyle[];
};

const Form4 = (prop: Props) => {
  const placeholder: string = 'Enter a new address';
  const [value, setValue] = useState('');
  return (
    <View style={[components.form4,prop?.style]}>
      <Image
        style={{tintColor: Colors.gray}}
        source={prop?.icon || require('../../../assets/icon/24/marker.png')}
      />

      <TextInput
        onFocus={prop?.onFocused}
        onBlur={prop?.onBlur}
        placeholder={prop?.placeholder || placeholder}
        value={value}
        onChangeText={setValue}
        style={[font.body, {width: '80%'}]}
      />

      <TouchableOpacity onPress={() => setValue('')}>
        <Image
          style={{
            backgroundColor: Colors.semiWhite,
            borderRadius: 8,
            width: 16,
            height: 16,
            opacity: value != '' ? 1 : 0,
          }}
          source={require('../../../assets/icon/24/close.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Form4;
