import React from 'react';
import { View, Image } from 'react-native';

const ActiveTab = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/icon/active.png')}
        style={{
          width: 16,
          height: 16,
          position: 'absolute',
            top: -23,
            left: -14,
        }}
        resizeMode='contain'
      />
    </View>
  );
};

export default ActiveTab;
