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
import {StatusBar} from 'react-native';
import {SIZES} from '../../constants';
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
import {COLORS} from '../../constants';

const LoginScreen = ({
  navigation,
  checked_login_pass,
  checked_login_email,
  gen_login_err,
  gen_login_err_method,
  reset_checked,
  email,
  password,
  login_email_checked,
  update_user,
  route,
  login_pass_checked,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [_email, setEmail] = useState('');
  const [_password, setPass] = useState('');
  // const persistUserData = user => {
  //   return new Promise(function (resolve, reject) {
  //     AsyncStorage.setItem('user', JSON.stringify(user))
  //       .then(() => {
  //         resolve(JSON.stringify(user));
  //         console.log('user saved', JSON.stringify(user));
  //       })
  //       .catch(err => reject('Logged in User data not persisted : ', err));
  //   });
  // };

  // async function handlelogin_google() {
  //   GoogleSignin.configure({
  //     androidClientId:
  //       '649965817815-u2vhttoj9ri63h759cm8j94ktg9t0qvc.apps.googleusercontent.com',
  //   });
  //   await GoogleSignin.hasPlayServices()
  //     .then(hasPlayService => {
  //       if (hasPlayService) {
  //         GoogleSignin.signIn()
  //           .then(userInfo => {
  //             console.log(JSON.stringify(userInfo));
  //             // persistUserData(userInfo.user); //Storing User Data in Storage(Async)
  //             let auth_states = {
  //               user: user,
  //               userData: userData,
  //               status: 'loggedIn',
  //               error: null,
  //             };
  //             update_user(auth_states);
  //             navigation.navigate('Newproperty');
  //           })
  //           .catch(e => {
  //             console.log('ERROR IS: ' + JSON.stringify(e));
  //           });
  //       }
  //     })
  //     .catch(e => {
  //       console.log('ERROR IS: ' + JSON.stringify(e));
  //     });
  // }
  // async function handlelogout_google() {
  //   GoogleSignin.configure({
  //     androidClientId:
  //       '649965817815-u2vhttoj9ri63h759cm8j94ktg9t0qvc.apps.googleusercontent.com',
  //   });
  //   await GoogleSignin.hasPlayServices()
  //     .then(hasPlayService => {
  //       if (hasPlayService) {
  //         GoogleSignin.signOut()
  //           .then(userInfo => {
  //             console.log(JSON.stringify(userInfo));
  //           })
  //           .catch(e => {
  //             console.log('ERROR IS: ' + JSON.stringify(e));
  //           });
  //       }
  //     })
  //     .catch(e => {
  //       console.log('ERROR IS: ' + JSON.stringify(e));
  //     });
  // }
  const handleLogin = async () => {
    if (email && password) {
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
      navigation.navigate('Newproperty');
      // .finally(() => setLoading(false));
    } else {
      alert('Email or Password is empty.');
    }
  };
  // useEffect(() => {
  //   reset_checked();
  // }, []);
  useEffect(() => {
    console.log('Please enter');
    // console.log(checked_login_pass, checked_login_email);
  }, []);

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', async e => {
  //     console.log(e);
  //     function validate_email(val) {
  //       var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  //       return regex.test(val);
  //     }
  //     function validate_password(val) {
  //       var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  //       return regex.test(val);
  //     }
  //     if (validate_email(email) && validate_password(password)) {
  //       console.log('entered good', email, password);
  //       setDone(true);
  //       await login_email_checked(true);
  //       await login_pass_checked(true);
  //       // console.log('entered good', checked_login_email, checked_login_pass);
  //     } else {
  //       // console.log('entered bad', email, password);
  //       setDone(false);
  //       await login_email_checked(false);
  //     }

  //     //Put your Data loading function here instead of my loadData()
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
          Login
        </Text>

        <InputField
          label={'Email ID'}
          type={'login_email'}
          // value={email}
          defaultValue={email}
          // onChange={value => {
          //   console.log(value);
          //   setEmail(value.nativeEvent.text);
          // }}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={COLORS.mobile_theme_back}
              style={{marginTop: 18}}
            />
          }
          keyboardType="email-address"
        />
        {/* {'kirtan' == 'kirtan' && (
          <View style={{marginTop: -30, left: 25, marginBottom: 20}}>
            <Text style={{color: 'red'}}>kirtanHEre</Text>
          </View>
        )} */}
        <InputField
          label={'Password'}
          type={'login_password'}
          defaultValue={password}
          // defaultValue=""
          icon={
            <MaterialIcons
              name="lock-outline"
              size={20}
              color={COLORS.mobile_theme_back}
              style={{marginTop: 18}}
            />
          }
          onChange={value => {
            setPass(value.nativeEvent.text);
          }}
          inputType="password"
          fieldType={'Button'}
          fieldButtonLabel=" Forget?"
          fieldButtonFunction={() => {
            navigation.navigate('ForgetPassword');
          }}
        />

        {gen_login_err && (
          <View style={{marginTop: -30, left: 25, marginBottom: 20}}>
            <Text style={{color: 'red'}}>Invalid Email or Password</Text>
          </View>
        )}
        <CustomButton
          label={'Login'}
          color={
            checked_login_email && checked_login_pass
              ? COLORS.mobile_theme_back
              : 'gray'
          }
          onPress={e => {
            if (checked_login_email && checked_login_pass) {
              console.log('Done');
              handleLogin();
            } else {
              gen_login_err_method(true);
            }
          }}
        />
        {/* google signin */}
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              handlelogin_google();
            }}console.log('OnPressed')
            style={{
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 10,
              // paddingHorizontal: '',
              width: '100%',
              paddingVertical: 5,
              // left: 120,
              flexDirection: 'row',
            }}>
            <SvgUri
              height={30}
              width={30}
              source={GoogleSVG}
              style={{left: 75}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 17,
                flex: 4,
                paddingTop: 6,
                // left: 3,
              }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View> */}
        {/* goolge sign out    */}
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              handlelogout_google();
            }}
            style={{
              borderColor: '#ddd',
              borderWidth: 1,
              borderRadius: 10,
              // paddingHorizontal: '',
              width: '100%',
              paddingVertical: 5,
              // left: 120,
              flexDirection: 'row',
            }}>
            <SvgUri
              height={30}
              width={30}
              source={GoogleSVG}
              style={{left: 75}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 17,
                flex: 4,
                paddingTop: 6,
                // left: 3,
              }}>
              SIGN OUT
            </Text>
          </TouchableOpacity>
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={value => {
              // value.preventDefault();
              navigation.navigate('SignupScreen');
            }}>
            <Text style={{color: COLORS.mobile_theme_back, fontWeight: '700'}}>
              {' '}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {
    gen_login_err: state.authReducer.gen_login_err,
    checked_login_pass: state.authReducer.checked_login_pass,
    checked_login_email: state.authReducer.checked_login_email,
    email: state.authReducer.login_email,
    password: state.authReducer.login_password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gen_login_err_method: value => {
      return dispatch(AuthActions.gen_login_err(value));
    },
    reset_checked: () => {
      return dispatch(AuthActions.reset_checked());
    },
    update_user: auth_states => {
      return dispatch(AuthActions.updateUser(auth_states));
    },
    login_email_checked: value => {
      return dispatch(AuthActions.login_email_checked(value));
    },
    login_pass_checked: value => {
      return dispatch(AuthActions.login_pass_checked(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
