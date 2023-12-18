import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {components, font, Colors} from '../Styles';

type Props = {
  quantity?: number;
  name?: string;
  description?: string;
  price?: string;
  cancelable?: boolean;
  onPress?: () => void;
  onClose?: () => void;
};

const OrderRow = (prop: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        prop?.onPress && prop?.onPress();
      }}>
      <TouchableOpacity
        onPress={() => {
          prop?.onClose && prop?.onClose();
        }}
        style={{
          alignSelf: 'flex-end',
          display: prop?.cancelable ? 'flex' : 'none',
        }}>
        <Image source={require('../../../assets/icon/24/close.png')} />
      </TouchableOpacity>
      <View
        style={[
          components.list,
          {
            borderColor: Colors.semiWhite,
            paddingBottom: 20,
            marginBottom: 20,
            borderBottomWidth: 1,
            alignItems: 'flex-start',
          },
        ]}>
        <Text style={[font.body, components.orderQuantity]}>
          {prop?.quantity || 0}
        </Text>

        <View style={[{width: '65%', marginEnd: 15}]}>
          <Text style={[{fontSize: 20, fontWeight: '600', color: Colors.Main}]}>
            {prop?.name || 'Cookie Sandwich'}
          </Text>
          <Text style={[font.body, {color: Colors.gray, marginTop: 6}]}>
            {prop?.description ||
              'Shortbread, chocolate turtle cookies, and red velvet.'}
          </Text>
        </View>

        <Text style={[font.body, {fontWeight: '600', color: Colors.active}]}>
          {prop?.price || 'USD 7.4'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderRow;
