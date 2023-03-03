import React from 'react';
import {View, Text, Image, Appearance} from 'react-native';
import {useSelector} from 'react-redux';
import {FONTS, COLORS} from '../constants';

const TabIcon = ({focused, icon, iconStyle, label, isTrade}) => {
  let userData = useSelector(state => state.authReducer.userData);
  // let Appearance = userData.Appearance;
  let Appearance = 'White';
  let text_color;
  if (focused && Appearance == 'White') {
    text_color = COLORS.black;
  } else if (!focused && Appearance == 'White') {
    text_color = COLORS.black;
  } else if (focused && Appearance == 'Dark') {
    text_color = COLORS.white;
  } else {
    text_color = COLORS.white;
  }
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: COLORS.black,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
        <Text style={{color: COLORS.white, ...FONTS.h4}}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: Appearance == 'White' ? COLORS.primary : COLORS.white,
            ...iconStyle,
          }}
        />
        <Text
          style={{
            color: text_color,
            ...FONTS.h4,
          }}>
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;
