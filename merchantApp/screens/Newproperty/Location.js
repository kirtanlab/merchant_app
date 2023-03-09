import React, {Fragment, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
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
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  toastConfig,
  showErrorToast,
} from '../../components/NewProperty/ToastConfig';
import Nav_Header from '../../components/NewProperty/Nav_Header';
const Location = ({
  checked_Description_pg,
  checked_Location,
  navigation,
  checked_house_no,
  checked_Landmark,
}) => {
  const [imgUri, setimgUri] = React.useState(undefined);
  function next_page() {
    navigation.navigate('MoreProperty');
    console.log('next pagee');
  }
  function onPress_for() {
    if (checked_Landmark && checked_house_no) {
      console.log('Done');
      next_page();
    } else {
      showErrorToast((title = 'Fill Required Fields'));
      console.log('ckicked');
    }
  }
  function back_page() {
    navigation.navigate('BasicDetails');
    console.log('back pagee');
  }

  const selectDoc = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
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
  const selectDoc_multiple = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
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
      <View style={{}}>
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
          progress={0.5}
          color={COLORS.progress_bar}
          width={SIZES.width}
          height={SIZES.height * 0.01}
          style={{position: 'absolute', top: -1}}
        />
        <Nav_Header
          onPress_forward={onPress_for}
          onPress_back={back_page}
          color={
            checked_Landmark && checked_house_no
              ? COLORS.mobile_theme_back
              : COLORS.lightGray3
          }
          icon_color={
            checked_Landmark && checked_house_no
              ? COLORS.mobile_theme_back
              : COLORS.lightGray3
          }
          back={true}
        />
      </View>
      <View style={{padding: 15, marginTop: 25}}>
        <View>
          <Header
            step={2}
            subtitle={'Your House Number,Landmark,Location & Documents'}
            title={'Add Location Details'}
          />
        </View>
        <View style={{marginTop: 30}}>
          <NumericInput navigation={navigation} />
        </View>
        {/* Bijli ka bil */}
        <View>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.h2,
              fontWeight: 'bold',
              marginTop: 25,
            }}>
            Bijli ka bil
          </Text>
        </View>
        {imgUri === undefined && (
          <View style={{marginTop: 15}}>
            <Text
              style={{
                fontSize: SIZES.h2,
                color: COLORS.mobile_theme_back,
                //   fontWeight: 'bold',
              }}>
              Select Adhar(image or pdf form)
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
                  fontSize: SIZES.h2,
                  fontWeight: SIZES.form_button_text_fontWeight,
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
        {imgUri !== undefined && (
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
              {imgUri.name}
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
        {/* Videos of Images
        <View style={{marginTop: 25}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Upload Outer Photo of PG
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
        </View> */}
      </View>

      {/* <View style={{marginTop: '55%'}}>
        <CustomButton_form
          fontColor={
            checked_Landmark && checked_house_no
              ? COLORS.font_color
              : COLORS.lightGray3
          }
          backgroundColor={
            checked_Landmark && checked_house_no
              ? COLORS.mobile_theme_back
              : COLORS.lightGray4
          }
          label={'Go for Next Step '}
          _borderColor={
            checked_Landmark && checked_house_no
              ? COLORS.mobile_theme_back
              : COLORS.lightGray4
          }
          borderRadius
          onPress={() => {
            if (checked_Landmark && checked_house_no) {
              console.log('Done');
              next_page();
            } else {
              // gen_login_err_method(true);
              console.log('ckicked');
            }
          }}
        />
      </View>*/}
    </ScrollView>
  );
};
function mapStateToProps(state) {
  return {
    checked_house_no: state.newproperty_reducer.checked_house_no,
    checked_Location: state.newproperty_reducer.checked_Location,
    checked_Landmark: state.newproperty_reducer.checked_Landmark,
    checked_Description_pg: state.newproperty_reducer.checked_Description_pg,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
