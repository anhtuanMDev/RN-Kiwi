import {View, Text, TextInput, TouchableHighlight, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';
import {signinAsync} from '../../helper/state/signin/signinSlice';
import {AppDispatch} from '../../helper/state/store';

const SignIn = () => {
  const signin = useSelector((state: RootState) => state.signin);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(signin);
  }, [signin]);

  return (
    <View>
      <Text>SignIn</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button
        onPress={() =>
          dispatch(
            signinAsync({
              email: 'string',
              password: 'string',
            }),
          )
        }
        title="Sign in"
      />
    </View>
  );
};

export default SignIn;
