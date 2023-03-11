import React, {Fragment, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
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
import Nav_Header from '../../components/NewProperty/Nav_Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Terms from '../../components/Terms';
import Toast from 'react-native-toast-message';
import {
  toastConfig,
  showErrorToast,
} from '../../components/NewProperty/ToastConfig';
const Basic25 = ({navigation}) => {
  const [imgUri, setimgUri] = React.useState([]);
  const [vidUri, setvidUri] = React.useState([]);
  function next_page() {
    navigation.navigate('Basic3');
  }
  function onPress_for() {
    if (true) {
      console.log('Done');
      next_page();
    } else {
      showErrorToast((title = 'Fill Required Fields'));
      console.log('ckicked');
    }
  }
  function back_page() {
    navigation.navigate('Basic2');
  }

  const selectDoc_multiple_img = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      console.log(res);
      setimgUri(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled', err);
      } else {
        console.log(err);
      }
    }
  };
  const selectDoc_multiple_video = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.video],
      });
      console.log(res);
      setvidUri(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled videos', err);
      } else {
        console.log(err);
      }
    }
  };
  console.log(imgUri.length);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: 'white'}}>
      {/* <KeyboardAvoidingView */}
      {/* // behavior="position" */}
      {/* <ScrollView style={{backgroundColor: 'white'}}> */}
      <View style={{left: 1}}>
        <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
      </View>
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
          progress={0.75}
          color={COLORS.progress_bar}
          width={SIZES.width}
          height={SIZES.height * 0.006}
          style={{position: 'absolute', top: -1}}
        />
        <Nav_Header
          onPress_forward={onPress_for}
          onPress_back={back_page}
          color={true ? COLORS.mobile_theme_back : COLORS.lightGray3}
          icon_color={true ? COLORS.mobile_theme_back : COLORS.lightGray3}
          back={true}
        />
      </View>
      <View style={{flexDirection: 'column', height: SIZES.height}}>
        <View
          style={{
            padding: 15,
            marginTop: '10%',
            // flexShrink: 2,
            // flex: 1,
            // position: 'relative',
          }}>
          <View>
            <Header
              step={3}
              total={4}
              subtitle={'Let us know how your room looks'}
              title={'Photos and Videos of Rooms'}
            />
          </View>
          {/* Images */}
          <View>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.h2,
                fontWeight: 'bold',
                marginTop: 25,
              }}>
              Upload Images
            </Text>
          </View>
          {imgUri?.length < 5 && (
            <View style={{marginTop: 15}}>
              <Text
                style={{
                  fontSize: SIZES.h2,
                  color: COLORS.mobile_theme_back,
                  //   fontWeight: 'bold',
                }}>
                Select Images(images only)
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 15,
                  borderColor: COLORS.mobile_theme,
                  borderWidth: SIZES.form_button_borderWidth,
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
                  selectDoc_multiple_img();
                  console.log('doc clicked');
                }}>
                <Text
                  style={{
                    fontSize: SIZES.h2 - 4,
                    // fontWeight: SIZES.form_button_text_fontWeight,
                    color: COLORS.font_color,
                  }}>
                  Select Images
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {/* Show Uploaded */}
          {imgUri.length >= 1 && (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: COLORS.mobile_theme_back,
                // minWidth: 100,
                // width: '100%',
                minHeight: 40,
                borderRadius: 10,
                marginTop: 15,
                maxHeight: 200,
                // alignItems: 'center',
                padding: 5,
              }}>
              <Text style={{flex: 5, color: COLORS.white, fontSize: SIZES.h2}}>
                {imgUri[0].name}
              </Text>
              <TouchableOpacity
                style={{
                  // marginTop: 18,
                  flex: 1,
                  left: 20,
                  color: COLORS.white,
                  fontSize: SIZES.h2,
                }}
                onPress={() => {
                  setimgUri(undefined);
                }}>
                <Ionicons
                  name="close-circle-outline"
                  size={35}
                  color={true ? COLORS.white : 'lightgray'}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
          )}
          {/* videos */}
          <View>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.h2,
                fontWeight: 'bold',
                marginTop: 25,
              }}>
              Upload Videos
            </Text>
          </View>
          {vidUri.length < 5 && (
            <View style={{marginTop: 15}}>
              <Text
                style={{
                  fontSize: SIZES.h2,
                  color: COLORS.mobile_theme_back,
                  //   fontWeight: 'bold',
                }}>
                Select Videos(if any)
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 15,
                  borderColor: COLORS.mobile_theme,
                  borderWidth: SIZES.form_button_borderWidth,
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
                  selectDoc_multiple_video();
                  console.log('doc clicked');
                }}>
                <Text
                  style={{
                    fontSize: SIZES.h2 - 4,
                    // fontWeight: SIZES.form_button_text_fontWeight,
                    color: COLORS.font_color,
                  }}>
                  Select file
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {/* Show Uploaded */}
          {/* <Image
          source={{uri: imgUri}}
          style={{
            height: 300,
            width: SIZES.width - 45,
            borderRadius: 10,
            marginTop: 7,
            alignSelf: 'center',
          }}
        /> */}
          {vidUri.length >= 1 && (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: COLORS.mobile_theme_back,
                // minWidth: 100,
                // width: '100%',
                minHeight: 40,
                borderRadius: 10,
                marginTop: 15,
                maxHeight: 200,
                // alignItems: 'center',
                padding: 5,
              }}>
              <Text style={{flex: 5, color: COLORS.white, fontSize: SIZES.h2}}>
                {vidUri[0].name}
              </Text>
              <TouchableOpacity
                style={{
                  // marginTop: 18,
                  flex: 1,
                  left: 20,
                  color: COLORS.white,
                  fontSize: SIZES.h2,
                }}
                onPress={() => {
                  setimgUri(undefined);
                }}>
                <Ionicons
                  name="close-circle-outline"
                  size={35}
                  color={true ? COLORS.white : 'lightgray'}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Basic25;
