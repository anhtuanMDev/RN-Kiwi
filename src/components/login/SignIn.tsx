import {
  View,
  Text,
  Button,
  StatusBar,
  Modal
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';
import {signinAsync} from '../../helper/state/signin/signinSlice';
import {AppDispatch} from '../../helper/state/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {font, styles, Colors, components} from '../customs/Styles';
import TopBar from '../customs/TabBar/HomeBar';
import Form1 from '../customs/Form/Form1';
import B1 from '../customs/Button/B1';
import B2 from '../customs/Button/B2';

const SignIn = () => {
  const signin = useSelector((state: RootState) => state.signin);
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const greeting1: string = 'Enter your Phone number or Email for sign in, Or ';
  const greeting2: string = 'Create new account.';

  useEffect(() => {
    const id = signin.userData?._id;
    console.log(id);

    if (signin.isSigninSuccess)
      async () => {
        await AsyncStorage.setItem('id', id);
      };
  }, [signin]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getData = () => {
    console.log('email:' + validateEmail(email));
    console.log('password:' + password);
  };

  const AlertModal = (prop : {reason: string}) => {
    return (
      <View style={[styles.modalContainer]}>
        <View style={[components.modalView]}>
          <Text style={[font.h1Title,{color: Colors.Main, textAlign: 'center', marginTop: 20}]}>Fail</Text>
          <Text style={[font.subline,{color: Colors.Main, textAlign: 'center', marginTop: 10}]}>{prop?.reason || "For reason"}</Text>
          <B1 title="Try again" style={{marginHorizontal: 20, marginTop: 30, backgroundColor: Colors.blue}} onPress={() => {}}/>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        >
          <AlertModal/>
        </Modal>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'white'}
        translucent={false}
      />
      <TopBar name="Sign In" />

      <View style={styles.container1}>
        <Text style={[font.h1Title, {color: Colors.Main}]}>Welcome to</Text>

        <Text
          style={[font.body, {width: 245, marginBottom: 34, marginTop: 20}]}>
          {greeting1}
          <Text style={{color: Colors.active}}>{greeting2}</Text>
        </Text>

        <Form1 showIcon onChangeText={setEmail} />
        <Form1
          showIcon
          password
          placeholder="Password"
          style={{
            marginTop: 14,
          }}
          onChangeText={setPassword}
        />

        <Text style={[font.caption, {textAlign: 'center', marginVertical: 20}]}>
          Forget Password?
        </Text>

        <B1 title="Sign in" onPress={getData} />

        <Text style={[font.caption, {textAlign: 'center', marginVertical: 20}]}>
          Or
        </Text>

        <B2
          title="Connect with Google"
          type="Google"
          style={{backgroundColor: Colors.blue, marginVertical: 16}}
        />
        <B2 title="Connect with Facebook" type="Facebook" />
      </View>
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
