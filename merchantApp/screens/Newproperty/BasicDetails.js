import React, {Fragment, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
  Platform,
  AlertIOS,
  Alert,
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
import Gender from '../../components/NewProperty/Gender';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import {
  toastConfig,
  showErrorToast,
} from '../../components/NewProperty/ToastConfig';
import Nav_Header from '../../components/NewProperty/Nav_Header';

const BasicDetails = ({
  change_state,
  test,
  checked_adhar_name,
  checked_phone,
  navigation,
}) => {
  useEffect(() => {
    change_state();
    // console.log('test',test)
  }, []);
  function next_page() {
    navigation.navigate('Location');
    console.log('next pagee');
  }
  function onPress_for() {
    if (checked_adhar_name) {
      console.log('Done');
      next_page();
    } else {
      showErrorToast((title = 'Fill All Required Details'));
      console.log('ckicked');
    }
  }
  function back_page() {}

  const selectDoc = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
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
    <ScrollView style={{backgroundColor: 'white'}}>
      {/* <KeyboardAvoidingView
        behavior="position"
        style={{backgroundColor: 'white'}}> */}
      <View style={{right: 12}}>
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
          progress={0.25}
          color={COLORS.progress_bar}
          width={SIZES.width}
          height={SIZES.height * 0.01}
          style={{position: 'absolute', top: -1}}
        />
      </View>
      <Nav_Header
        icon_color={
          checked_adhar_name ? COLORS.mobile_theme_back : COLORS.lightGray3
        }
        color={
          checked_adhar_name ? COLORS.mobile_theme_back : COLORS.lightGray3
        }
        back={false}
        onPress_forward={onPress_for}
      />
      <View style={{padding: 15, marginTop: 25}}>
        <View>
          <Header
            step={1}
            subtitle={'Your intent,Property type & contact details'}
            title={'Add Basic Details'}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text_Input />
        </View>

        <View style={{marginTop: 0}}>
          <Looking_Selection_Button />
        </View>
        <View style={{marginTop: 30}}>
          <Gender />
        </View>
        {/* <View style={{marginTop: 25}}>
          <Who_you />
        </View> */}
        <View style={{marginTop: 25}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Upload Adhar(image or pdf form)
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
              selectDoc();
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
      </View>
      {/* <View style={{marginTop: '30%'}}>
        <CustomButton_form
          // fontColor={checked_adhar_name ? COLORS.font_color : COLORS.lightGray3}
          // backgroundColor={
          //   checked_adhar_name ? COLORS.mobile_theme_back : COLORS.lightGray4
          // }
          // label={'Go for Next Step '}
          // _borderColor={
          //   checked_adhar_name ? COLORS.mobile_theme_back : COLORS.lightGray4
          // }
          // borderRadius
          // onPress={() => {
          //   if (checked_adhar_name) {
          //     console.log('Done');
          //     next_page();
          //   } else {
          //     // gen_login_err_method(true);
          //     console.log('ckicked');
          //   }
          // }}
        />
      </View> */}
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {
    test: state.newproperty_reducer.new_test,
    checked_adhar_name: state.authReducer.checked_adhar_name,
    checked_phone: state.authReducer.checked_phone,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_state: () => {
      dispatch(newproperty_actions.setTest());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BasicDetails);
