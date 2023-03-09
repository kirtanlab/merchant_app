import React, {Fragment, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import {connect} from 'react-redux';
import HomeScreen_Header from '../components/Homescreen/HomeScreen_Header';
import MyProperty from '../components/Homescreen/MyProperty';
import MyRooms from '../components/Homescreen/MyRooms';
import Notifications from '../components/Homescreen/Notifications';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 1,
        paddingVertical: 13,
      }}>
      {/* <KeyboardAvoidingView
        behavior="position"
        style={{backgroundColor: 'white'}}> */}

      <StatusBar
        animated={true}
        backgroundColor={COLORS.mobile_theme_back}
        barStyle={'light-content'}
      />

      {/* <SafeAreaView
        style={{
          height: SIZES.height * 0.07,
          backgroundColor: COLORS.mobile_theme_back,
          elevation: 1,
        }}

      /> */}

      <HomeScreen_Header username={'Kirtan'} />
      <MyProperty />
      {/* <View>
        <Text> Kirtan here</Text>
      </View> */}
      <MyRooms />
      <Notifications />
    </ScrollView>
  );
};
export default HomeScreen;
