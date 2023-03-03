import React, {useEffect, useState} from 'react';
import SvgUri from 'react-native-svg-uri';
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
  const [pass, setPass] = useState('');
  const [conf_pass, set_conf_pass] = useState('');
  const [done, setDone] = useState(false);
  const [focused_new, setFocused_new] = useState(false);
  const [focused_conf, setFocused_conf] = useState(false);
  const [Blured_new, setBlured_new] = useState(false);
  const [Blured_conf, setBlured_conf] = useState(false);
  const [checked_new, setChecked_new] = useState(false);
  const [checked_conf, setChecked_conf] = useState(false);
  const handleLogin = async () => {
    if (pass === conf_pass) {
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
      navigation.navigate('LoginScreen');
      // .finally(() => setLoading(false));
    } else {
      alert('Email or Password is empty.');
    }
  };
  const handle_pass = e => {
    setPass(e);
    function validate_password(val) {
      var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      return regex.test(val);
    }
    if (validate_password(e)) {
      setChecked_new(true);
      if (checked_conf) {
        setDone(true);
      }
    } else {
      setChecked_new(false);
      setDone(false);
    }
    // set(e);
    console.log('password', e);
  };
  const handle_conf_pass = e => {
    console.log('password conf', pass);
    console.log('password_conf_real', e);
    set_conf_pass(e);
    function validate_conf_password(val) {
      return pass == val;
    }
    if (validate_conf_password(e)) {
      setChecked_conf(true);
      if (checked_new) {
        setDone(true);
      }
    } else {
      setChecked_conf(false);
      setDone(false);
    }
    // set(e);
    console.log('password', e);
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

            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: COLORS.mobile_theme_back,
                  marginTop: '20%',
                  marginBottom: 7,
                }}>
                New Password
              </Text>
              {/* New Password */}
              <InputField
                label={'New Password'}
                type={'new_password'}
                onFocus={() => {
                  setBlured_new(false), setFocused_new(true);
                }}
                onBlur={() => {
                  setFocused_new(false), setBlured_new(true);
                }}
                onChange={e => {
                  handle_pass(e.nativeEvent.text);
                }}
                icon={
                  <MaterialIcons
                    name="alternate-email"
                    size={20}
                    color={COLORS.mobile_theme_back}
                    style={{marginTop: 18}}
                  />
                }
                // onChange={value => handle_email(value.nativeEvent.text)}
                keyboardType="email-address"
              />
              {focused_new && !checked_new && (
                <View style={{marginTop: -30, left: 35, marginBottom: 20}}>
                  <Text style={{color: COLORS.lightGray2}}>
                    Enter Minimum 5 Letter{'\n'}Include at least one alphabet
                  </Text>
                </View>
              )}
            </View>
            {/* conf_pass */}
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: COLORS.mobile_theme_back,
                  //   marginTop: '20%',
                  marginBottom: 7,
                }}>
                Confirm New Password
              </Text>

              <InputField
                label={'New Password'}
                type={'new_password'}
                onFocus={() => {
                  setBlured_conf(false), setFocused_conf(true);
                }}
                onBlur={() => {
                  setFocused_conf(false), setBlured_conf(true);
                }}
                onChange={e => {
                  handle_conf_pass(e.nativeEvent.text);
                }}
                icon={
                  <MaterialIcons
                    name="alternate-email"
                    size={20}
                    color={COLORS.mobile_theme_back}
                    style={{marginTop: 18}}
                  />
                }
                // onChange={value => handle_email(value.nativeEvent.text)}
                keyboardType="email-address"
              />
              {focused_conf && !checked_conf && (
                <View style={{marginTop: -30, left: 35, marginBottom: 20}}>
                  <Text style={{color: COLORS.lightGray2}}>
                    Both Field should matched
                  </Text>
                </View>
              )}
            </View>
          </View>

          {err && (
            <View style={{marginTop: -30, left: 25, marginBottom: 20}}>
              <Text style={{color: 'red'}}>Match Both Password</Text>
            </View>
          )}
          <View
            style={{marginTop: '20%', width: SIZES.width * 0.8, left: '10%'}}>
            <CustomButton
              label={'Login'}
              color={done ? COLORS.mobile_theme_back : 'gray'}
              onPress={() => {
                if (checked_new && checked_conf) {
                  console.log('Done');
                  handleLogin();
                } else {
                  setError(true);
                }
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>New to the app?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text
                style={{color: COLORS.mobile_theme_back, fontWeight: '700'}}>
                {' '}
                Back to Sign in
              </Text>
            </TouchableOpacity>
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
