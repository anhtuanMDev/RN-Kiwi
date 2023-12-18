import {View, Text, ViewStyle, Image} from 'react-native';
import React from 'react';
import {components, font, Colors} from '../Styles';

type Props = {
  name?: string;
  description?: string;
  type?: string;
  money?: string;
  image?: any;
  style?: ViewStyle;
};

const Food = (prop: Props) => {
  const name: string = 'Cookie Sandwich';
  const description: string =
    'Shortbread, chocolate turtle cookies, and red velvet.';
  return (
    <View style={[components.list, {paddingVertical: 0}, prop?.style]}>
      <Image
      resizeMode='contain'
      style={{width: 110, height: 110}}
        borderRadius={8}
        source={prop?.image || require('../../../assets/img/listFood.png')}
      />

      <View
        style={[{width: '65%', height: 110, justifyContent: 'space-between'}]}>
        <Text style={[font.subline, {fontWeight: '500', color: Colors.Main}]}>
          {prop?.name || name}
        </Text>
        <Text
          style={[font.body, {width: '80%', height: 48, color: Colors.gray}]}>
          {prop?.description || description}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[font.subhead, {color: Colors.gray}]}>$$</Text>
            <View style={[components.dot, {marginHorizontal: 10}]} />
            <Text style={[font.subhead, {color: Colors.gray}]}>
              {prop?.type || 'Chinese'}
            </Text>
          </View>

          <Text style={[font.body, {fontWeight: '600',color: Colors.active}]}>
            {prop?.money || 'USD 7.4'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Food;
