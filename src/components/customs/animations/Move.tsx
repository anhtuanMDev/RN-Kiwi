import {
  View,
  Text,
  Button,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import React from 'react';

const Move = () => {
  const position = new Animated.ValueXY({x: 0, y: 0});

  const viewWidth = Dimensions.get("screen").width;

  function move(x: number) {
    const minX = 0;
    const maxX = viewWidth - 100 - 20;
    
    // Ensure x stays within the bounds of minX and maxX
    x = Math.max(minX, Math.min(x, maxX));
    Animated.timing(position, {
      toValue: {x: x,y:0},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        padding: 10,
    }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          borderRadius: 10,
          transform: [{translateX: position.x}],
        }}>
        <Text>Move</Text>
      </Animated.View>
      <Animated.View style={styles.container}>
        <Button title="Left" onPress={()=>move(0)} />
        <Button title="Center" onPress={()=>move((viewWidth-100)/2)}/>
        <Button title="Right" onPress={()=>move(viewWidth)}/>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  box: {},
});

export default Move;
