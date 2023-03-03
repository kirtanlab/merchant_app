import React, {Fragment, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/NewProperty/Header';
import * as Progress from 'react-native-progress';
import {COLORS, SIZES} from '../../constants';
import Looking_Selection_Button from '../../components/NewProperty/Looking_Selection_Button';
import {connect} from 'react-redux';
import * as newproperty_actions from '../../store/Newproperty/newproperty_action';
import Who_you from '../../components/NewProperty/Who_you';
import Text_Input from '../../components/NewProperty/Text_Input';
import DocumentPicker from 'react-native-document-picker';
import CustomButton_form from '../../components/NewProperty/CustomButton_form';
import NumericInput from '../../components/NewProperty/NumericInput';
import Floor_prices from '../../components/NewRooms.js/Floor_prices';
import Ac_attached from '../../components/NewRooms.js/Ac_attached';
import InputField from '../../components/InputField';
// import {Checkbox} from 'react-native-paper';
import CheckBox from '../../components/CheckBox';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Terms from '../../components/Terms';
const Basic2 = ({
  navigation,
  extra_description,
  baseTerms,
  checked_base_terms,
  focused_price,
  checked_price,
  price,
}) => {
  function next_page() {
    navigation.navigate('Basic3');
  }
  const selectDoc_multiple = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.images,
          DocumentPicker.types.video,
        ],
      });
      console.log(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled', err);
      } else {
        console.log(err);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      // behavior="position"
      style={{backgroundColor: 'white'}}>
      {/* <ScrollView style={{backgroundColor: 'white'}}> */}
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
      <View>
        <Progress.Bar
          progress={0.67}
          color={COLORS.progress_bar}
          width={SIZES.width}
          height={SIZES.height * 0.006}
          style={{position: 'absolute', top: -1}}
        />
      </View>
      <View style={{padding: 15, marginTop: 45}}>
        <View>
          <Header
            step={2}
            subtitle={'Photo/Videos of Rooms,T&Cs'}
            title={'Final Step! '}
          />
        </View>
        {/* Prices */}
        <View>
          <KeyboardAvoidingView>
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: SIZES.custom1,
                  fontWeight: 'bold',
                }}>
                Enter Room Price
              </Text>
            </View>
            <View style={{marginTop: 8, flexDirection: 'row'}}>
              <View
                style={{
                  borderColor: COLORS.mobile_theme_back,
                  // borderWidth: 2,
                  borderTopEndRadius: 5,
                  borderTopStartRadius: 5,
                  borderBottomStartRadius: 5,
                  borderBottomEndRadius: 5,
                  backgroundColor: COLORS.mobile_theme_back,
                  height: 30,
                  width: 40,
                  marginTop: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: COLORS.font_color, fontSize: SIZES.h1}}>
                  ₹
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: SIZES.width * 0.7, marginLeft: 7}}>
                  <InputField
                    label={'Enter Prices'}
                    type={'prices'}
                    keyboardType={'phone-pad'}
                    value={price}
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
                    size={25}
                    color={
                      checked_price ? COLORS.mobile_theme_back : 'lightgray'
                    }
                    style={{marginRight: 5, marginTop: 2}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {focused_price && !checked_price && (
              <View style={{marginTop: -30, left: 50, marginBottom: 20}}>
                <Text style={{color: COLORS.lightGray3}}>
                  Enter Valid Prices
                </Text>
              </View>
            )}
          </KeyboardAvoidingView>
        </View>

        {/* Extra Description */}
        {/* <View style={{marginTop: 30}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Enter Description
          </Text>
        </View> */}
        {/* <View style={{marginTop: 6}}>
          <View
            style={{
              width: SIZES.width * 0.8,
            }}>
            <InputField
              label={'Extra Description'}
              type={'Extra_description'}
              keyboardType={'default'}
              value={extra_description}
              multiline
            />
          </View>
        </View> */}
        {/* Videos of Images */}
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Upload Outer Photo & Videos of Rooms
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 15,
              borderColor: COLORS.mobile_theme,
              // borderWidth: SIZES.form_button_borderWidth,
              borderRadius: SIZES.form_button_borderRadius,
              minWidth: SIZES.form_button_minWidth,
              maxWidth: SIZES.form_button_maxWidth,
              maxHeight: SIZES.form_button_maxHeight,
              padding: SIZES.form_button_padding,
              alignItems: SIZES.form_button_alignItems,
              justifyContent: SIZES.form_button_justifyContent,
              backgroundColor: COLORS.mobile_theme_back,
            }}
            onPress={() => {
              selectDoc_multiple();
              console.log('doc clicked');
            }}>
            <Text
              style={{
                fontSize: SIZES.form_button_text_fontSize,
                fontWeight: SIZES.form_button_text_fontWeight,
                color: COLORS.font_color,
              }}>
              Select fles
            </Text>
          </TouchableOpacity>
        </View>
        {/* Videos of Images */}
        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Upload Outer Photo & Videos of Rooms
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 15,
              borderColor: COLORS.mobile_theme,
              // borderWidth: SIZES.form_button_borderWidth,
              borderRadius: SIZES.form_button_borderRadius,
              minWidth: SIZES.form_button_minWidth,
              maxWidth: SIZES.form_button_maxWidth,
              maxHeight: SIZES.form_button_maxHeight,
              padding: SIZES.form_button_padding,
              alignItems: SIZES.form_button_alignItems,
              justifyContent: SIZES.form_button_justifyContent,
              backgroundColor: COLORS.mobile_theme_back,
            }}
            onPress={() => {
              selectDoc_multiple();
              console.log('doc clicked');
            }}>
            <Text
              style={{
                fontSize: SIZES.form_button_text_fontSize,
                fontWeight: SIZES.form_button_text_fontWeight,
                color: COLORS.font_color,
              }}>
              Select fles
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: '50%'}}>
          <Terms />
        </View>
        <View
          style={{
            marginTop: 20,
            position: 'relative',
            justifyContent: 'center',
            marginLeft: -15,
          }}>
          <CustomButton_form
            fontColor={
              checked_base_terms && checked_price
                ? COLORS.font_color
                : COLORS.lightGray3
            }
            backgroundColor={
              checked_base_terms && checked_price
                ? COLORS.mobile_theme_back
                : COLORS.lightGray4
            }
            label={'Go for Next Step '}
            _borderColor={
              checked_base_terms && checked_price
                ? COLORS.mobile_theme_back
                : COLORS.lightGray4
            }
            borderRadius
            onPress={() => {
              if (checked_base_terms && checked_price) {
                console.log('Done');
                next_page();
              } else {
                // gen_login_err_method(true);
                console.log('ckicked');
              }
            }}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

function mapStateToProps(state) {
  return {
    price: state.Newrooms_reducer.price,
    focused_price: state.Newrooms_reducer.focused_price,
    checked_price: state.Newrooms_reducer.checked_price,
    checked_base_terms: state.Newrooms_reducer.checked_base_terms,
    baseTerms: state.Newrooms_reducer.baseTerms,
    extra_description: state.Newrooms_reducer.extra_description,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Basic2);
