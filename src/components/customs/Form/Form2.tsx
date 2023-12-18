import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, font, components} from '../Styles';

type Props = {
  title?: string;
  eye?: boolean;
  done?: boolean;
  style?: ViewStyle | ViewStyle[];
};

const Form2 = (prop: Props) => {
  const [show, setShow] = useState(true);
  return (
    <View style={[components.form2, prop?.style]}>
      <View style={[components.form2Title]}>
        <Text style={[font.body, {textTransform: 'uppercase', fontSize: 12}]}>
          {prop?.title || 'Password'}
        </Text>

        <TouchableOpacity onPress={() => setShow(!show)} activeOpacity={1}>
          <Image
            style={{display: prop?.eye ? 'flex' : 'none'}}
            source={
              !show
                ? require('../../../assets/icon/24/invisible.png')
                : require('../../../assets/icon/24/visible.png')
            }
          />
        </TouchableOpacity>
      </View>

      <View style={[components.form2Title]}>
        <TextInput
          secureTextEntry={show}
          style={[font.body, {width: '90%', backgroundColor: Colors.input}]}
        />
        <Image
          style={{
            tintColor: Colors.active,
            display: prop?.done ? 'flex' : 'none',
          }}
          source={require('../../../assets/icon/24/done.png')}
        />
      </View>
    </View>
  );
};

export default Form2;
