import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';

// import {auth} from '../../firebase';
// import {signInWithEmailAndPassword} from 'firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {updateUser} from '../../store/auth/authActions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import icons from '../../constants/icons';
import LoginSVG from '../../assets/icons/login.svg';
import GoogleSVG from '../../assets/icons/google.svg';
import * as AuthActions from '../../store/auth/authActions';
import CustomButton from '../../components/CustomeButton';
import InputField from '../../components/InputField';
import {COLORS, SIZES} from '../../constants';
import {StatusBar} from 'react-native';
const ForgetPass = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const handleLogin = async () => {
    if (email) {
      // setLoading(true);
      // console.log(password + '', email);
      // await signInWithEmailAndPassword(auth, email, password)
      //   .then(async userCredentials => {
      //     const fire_user = userCredentials.user;
      //     let user = {
      //       displayName: fire_user.displayName,
      //       email: fire_user.email,
      //     };
      //     const userData = {
      //       Apperance: 'White',
      //     };
      //     // setLoggedin(true);
      //     console.log('kirtan', user);
      //     let auth_states = {
      //       user: user,
      //       userData: userData,
      //       status: 'loggedIn',
      //       error: null,
      //     };

      //     // await persistUserData(user) //Storing User Data in Storage(Async)
      //     // .then(user => {
      //     update_user(auth_states); //setting to async storage
      //     // );

      //   })
      //   .catch(e => {
      //     alert('Could not Sign In.. : ' + e.code);
      //     console.log(e.code);
      //   });
      navigation.navigate('OTPScreen', {
        email: email,
      });
      // .finally(() => setLoading(false));
    } else {
      alert('Email or Password is empty.');
    }
  };
  const handle_email = e => {
    function validate_email(e) {
      var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return regex.test(e);
    }
    if (validate_email(e)) {
      setDone(true);
    } else {
      setDone(false);
    }
    setEmail(e);
    console.log('Email', e);
  };
  useEffect(() => {
    // reset_checked();
  }, []);
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        behavior="position"
        style={{backgroundColor: 'white'}}>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.mobile_theme_back}
          barStyle={'light-content'}
        />

        <SafeAreaView
          style={{
            height: SIZES.height * 0.03,
            backgroundColor: COLORS.mobile_theme_back,
            elevation: 1,
          }}
        />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingTop: '20%',
            //   paddingHorizontal: 2
          }}>
          <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}>
              {/* <SvgUri
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
            source={icons.logo_rent}
          /> */}
              <Image
                source={icons.logo_rent}
                style={{
                  height: 232,
                  width: 232,
                  borderRadius: 20,
                  marginTop: '1%',
                  alignSelf: 'center',
                }}
              />
            </View>

            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 35,
                fontWeight: 'bold',
                color: COLORS.mobile_theme_back,
                marginTop: '20%',
                marginBottom: 30,
              }}>
              Forgot Password?
            </Text>

            <InputField
              label={'Email ID'}
              type={'forget_email'}
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={20}
                  color={COLORS.mobile_theme_back}
                  style={{marginTop: 18}}
                />
              }
              onChange={value => {
                value = value.nativeEvent.text;
                value = value.trimEnd();
                handle_email(value);
              }}
              keyboardType="email-address"
            />

            {err && (
              <View style={{marginTop: -30, left: 34, marginBottom: 20}}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>
                  Invalid Email or Password
                </Text>
              </View>
            )}
            <CustomButton
              label={'Submit'}
              color={done ? COLORS.mobile_theme_back : 'gray'}
              onPress={() => {
                if (done && email) {
                  console.log('Done');
                  handleLogin();
                } else {
                  setError(true);
                }
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text>Already have account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text
                  style={{color: COLORS.mobile_theme_back, fontWeight: '700'}}>
                  {' '}
                  Back to Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPass);
