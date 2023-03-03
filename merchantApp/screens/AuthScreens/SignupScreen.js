import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import SvgUri from 'react-native-svg-uri';
import InputField from '../../components/InputField';
import {COLORS, icons, SIZES} from '../../constants';
import {Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegistrationSVG from '../../assets/icons/registration.svg';
import CustomButton from '../../components/CustomeButton';

import {connect} from 'react-redux';

// import {auth} from '../../firebase';
// import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

import * as AuthActions from '../../store/auth/authActions';
const SignupScreen = ({
  navigation,
  updateUser,
  name,
  phone,
  focused_phone,
  checked_phone,
  email,
  password,
  confirmPassword,
  focused_sign_email,
  focused_sign_name,
  focused_sign_pass,
  focused_sign_conf_pass,
  checked_sign_email,
  checked_sign_name,
  checked_sign_pass,
  checked_sign_conf_pass,
  gen_sign_err,
  gen_sign_err_method,
  reset_checked,
}) => {
  let err = true;
  let checked = false;

  // const persistUserData = user => {
  //   return new Promise(function (resolve, reject) {
  //     AsyncStorage.setItem('userData', JSON.stringify(user))
  //       .then(() => resolve(JSON.stringify(user)))
  //       .catch(err => reject('Logged in User data not persisted : ', err));
  //   });
  // };
  async function handleSignUp() {
    if (email && password && confirmPassword && name) {
      // setLoading(true);

      // await createUserWithEmailAndPassword(auth, email, password)
      //   .then(userCredentials => {
      //     const fire_user = userCredentials.user;
      //     let user = {
      //       displayName: fire_user.displayName,
      //       email: fire_user.email,
      //     };

      //     let userData = {
      //       Apperance: 'White', //Default Apperance
      //     };
      //     updateProfile(auth.currentUser, {
      //       displayName: name,
      //     });
      //     console.log('usercreated', user);
      //     Async;
      //     let auth_states = {
      //       user: user,
      //       userData: userData,
      //       status: 'loggedIn',
      //       error: null,
      //     };
      // updateUser(auth_states);
      navigation.navigate('LoginScreen');
      // })
      // .catch(err => {
      //   alert(err.message);
      // });
      // .finally();
    } else {
      // setLoading(false);
      console.error('else part');
    }
  }
  useEffect(() => {
    reset_checked();
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20}}>
        <View style={{marginTop: 0, alignItems: 'center'}}>
          <Image
            source={icons.logo_rent}
            style={{
              height: 232,
              width: 232,
              borderRadius: 20,
              marginTop: 30,
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
            marginTop: 40,
            marginBottom: 30,
          }}>
          Register
        </Text>
        {/* UserName */}
        <View style={{flexDirection: 'row'}}>
          <View style={{width: SIZES.width * 0.83, left: 6}}>
            <InputField
              label={'User Name'}
              type={'sign_name'}
              value={name}
              icon={
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={err ? COLORS.mobile_theme_back : 'red'}
                  style={{marginTop: 18}}
                />
              }
            />
          </View>
          <TouchableOpacity>
            <Ionicons
              name="checkmark-done-outline"
              size={20}
              color={checked_sign_name ? COLORS.mobile_theme_back : 'lightgray'}
              style={{marginTop: 18}}
            />
          </TouchableOpacity>
        </View>
        {focused_sign_name === true && checked_sign_name == false && (
          <View style={{marginTop: -30, left: 35, marginBottom: 20}}>
            <Text style={{color: 'red'}}>
              Enter Minimum 5 Letter{'\n'}Include at least one alphabet
            </Text>
          </View>
        )}
        {/* Mobile_no */}
        <View
          style={{
            flexDirection: 'row',
            width: SIZES.width,
            marginTop: -10,
            marginLeft: 7,
          }}>
          <View style={{marginTop: 8, flexDirection: 'row'}}>
            <View
              style={{
                borderColor: COLORS.mobile_theme_back,
                borderWidth: 1,
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                borderBottomStartRadius: 5,
                borderBottomEndRadius: 5,
                backgroundColor: COLORS.white,
                height: 30,
                width: 30,
                marginTop: 4,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -6,
              }}>
              <Text
                style={{
                  color: COLORS.mobile_theme_back,
                  fontSize: 19,
                  fontWeight: 'bold',
                }}>
                +91
              </Text>
            </View>
          </View>
          <View style={{width: SIZES.width * 0.75, left: 2}}>
            <InputField
              label={'Enter Phone Number'}
              type={'phone'}
              keyboardType={'phone-pad'}
              value={phone}
              //   icon={
              //     <Ionicons
              //       name="call-outline"
              //       size={20}
              //       color={err ? '#666' : 'red'}
              //       style={{marginRight: 5, marginTop: 5}}
              //     />
              //   }
            />
          </View>
          <TouchableOpacity>
            <Ionicons
              name="checkmark-done-outline"
              size={20}
              color={checked_phone ? COLORS.mobile_theme_back : 'lightgray'}
              style={{marginTop: 18}}
            />
          </TouchableOpacity>
        </View>

        {focused_phone && !checked_phone && (
          <View style={{marginTop: -30, left: 35, marginBottom: 20}}>
            <Text style={{color: COLORS.lightGray3}}>
              Enter 10 Digit Phone Number
            </Text>
          </View>
        )}
        {/* EmailSection */}
        <View style={{flexDirection: 'row'}}>
          <View style={{width: SIZES.width * 0.83, left: 6}}>
            <InputField
              label={'Email ID'}
              type={'sign_email'}
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={24}
                  color={err ? COLORS.mobile_theme_back : 'red'}
                  style={{marginTop: 18}}
                />
              }
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity>
            <Ionicons
              name="checkmark-done-outline"
              size={20}
              color={
                checked_sign_email ? COLORS.mobile_theme_back : 'lightgray'
              }
              style={{marginTop: 18}}
            />
          </TouchableOpacity>
        </View>
        {focused_sign_email && !checked_sign_email && (
          <View style={{marginTop: -30, left: 35, marginBottom: 20}}>
            <Text style={{color: 'red'}}>Enter Your Valid Email ID</Text>
          </View>
        )}

        {/* PasswordField */}
        <View style={{flexDirection: 'row'}}>
          <View style={{width: SIZES.width * 0.83, left: 6}}>
            <InputField
              label={'Password'}
              type={'sign_password'}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={24}
                  color={err ? COLORS.mobile_theme_back : 'red'}
                  style={{marginTop: 18}}
                />
              }
              inputType="password"
            />
          </View>

          <TouchableOpacity>
            <Ionicons
              name="checkmark-done-outline"
              size={20}
              color={checked_sign_pass ? COLORS.mobile_theme_back : 'lightgray'}
              style={{marginTop: 18}}
            />
          </TouchableOpacity>
        </View>
        {focused_sign_pass && !checked_sign_pass && (
          <View style={{marginTop: -30, left: 35, marginBottom: 20}}>
            <Text style={{color: 'red'}}>
              Enter Atleast one number{'\n'} Enter Atleast One Symbol(!@#$%^&*){' '}
              {'\n'} enter atleast 6 letters
            </Text>
          </View>
        )}

        {/* ConfirmPassword */}
        <View style={{flexDirection: 'row'}}>
          <View style={{width: SIZES.width * 0.83, left: 6}}>
            <InputField
              label={'Confirm Password'}
              type={'sign_conf_password'}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={24}
                  color={err ? COLORS.mobile_theme_back : 'red'}
                  style={{marginTop: 18}}
                />
              }
              inputType="password"
            />
          </View>

          <TouchableOpacity>
            <Ionicons
              name="checkmark-done-outline"
              size={20}
              color={
                password == confirmPassword && checked_sign_conf_pass
                  ? COLORS.mobile_theme_back
                  : 'lightgray'
              }
              style={{marginTop: 18}}
            />
          </TouchableOpacity>
        </View>
        {focused_sign_conf_pass &&
          checked_sign_conf_pass &&
          !(password == confirmPassword) && (
            <View style={{marginTop: -30, left: 35, marginBottom: 20}}>
              <Text style={{color: 'red'}}>
                Shouldn't be empty {'\n'}Should match password entered above
              </Text>
            </View>
          )}
        {gen_sign_err && (
          <View style={{marginTop: -30, left: 35, marginBottom: 20}}>
            <Text style={{color: 'red'}}>
              Fill all the blanks appropriately
            </Text>
          </View>
        )}

        {/* RegisterButton */}
        <CustomButton
          label={'Register'}
          color={
            checked_sign_email &&
            checked_sign_name &&
            checked_sign_pass &&
            password == confirmPassword &&
            checked_sign_conf_pass
              ? COLORS.mobile_theme_back
              : 'gray'
          }
          onPress={() => {
            if (
              password == confirmPassword &&
              checked_sign_email &&
              checked_sign_name &&
              checked_sign_pass &&
              checked_sign_conf_pass
            ) {
              console.log('Done');
              handleSignUp();
            } else {
              gen_sign_err_method(true);
            }
          }}
        />

        {/* Login Redirect */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{color: COLORS.mobile_theme_back, fontWeight: '700'}}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    name: state.authReducer.sign_name,
    email: state.authReducer.sign_email,
    password: state.authReducer.sign_password,
    confirmPassword: state.authReducer.sign_conf_password,
    focused_sign_email: state.authReducer.focused_sign_email,
    focused_sign_name: state.authReducer.focused_sign_name,
    focused_sign_pass: state.authReducer.focused_sign_pass,
    focused_sign_conf_pass: state.authReducer.focused_sign_conf_pass,
    checked_sign_email: state.authReducer.checked_sign_email,
    checked_sign_name: state.authReducer.checked_sign_name,
    checked_sign_pass: state.authReducer.checked_sign_pass,
    checked_sign_conf_pass: state.authReducer.checked_sign_conf_pass,
    gen_sign_err: state.authReducer.gen_sign_err,
    phone: state.authReducer.phone,
    focused_phone: state.authReducer.focused_phone,
    checked_phone: state.authReducer.checked_phone,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: auth_states => {
      return dispatch(AuthActions.updateUser(auth_states));
    },
    gen_sign_err_method: value => {
      return dispatch(AuthActions.gen_sign_err(value));
    },
    reset_checked: () => {
      return dispatch(AuthActions.reset_checked());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
