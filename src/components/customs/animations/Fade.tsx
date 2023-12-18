import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import React from 'react';

const Fade = () => {
  // Tạo Animated Value
  const fadeAnim = new Animated.Value(0);

  // Hàm fade in animation
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) console.log('Finished');
      else console.log('Not finished');
    });
  };

  // Hàm fade out animation
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) console.log('Finished');
      else console.log('Not finished');
    });
  };

  return (
    <View>
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
          },
          styles.animated,
        ]}>
        <Text style={styles.text}>This is fade</Text>
      </Animated.View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={styles.button} onPress={fadeIn}>
          <Text style={styles.text}>Fade In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={fadeOut}>
          <Text style={styles.text}>Fade Out</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

export default Fade;

const styles = StyleSheet.create({
  animated: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    textAlignVertical: 'center',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
