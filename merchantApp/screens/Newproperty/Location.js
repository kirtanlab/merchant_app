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
  // const Nav_Header = () => {
  //   return (
  // <View
  //   style={{
  //     flexDirection: 'row',
  //     position: 'relative',
  //     top: '6%',
  //     paddingBottom: 7,
  //     borderBottomColor: COLORS.lightGray4,
  //     borderBottomWidth: 1,
  //   }}>
  //   <View
  //     style={{
  //       right: SIZES.width * 0.35,
  //       width: 70,
  //     }}>
  //     <TouchableOpacity
  //       onPress={() => {
  //         console.log('back');
  //         navigation.navigate('BasicDetails');
  //       }}>
  //       <View style={{flexDirection: 'row'}}>
  //         <View style={{flex: 1, top: 2}}>
  //           <Text
  //             style={{
  //               color:
  //                 checked_Landmark && checked_house_no
  //                   ? COLORS.mobile_theme_back
  //                   : COLORS.lightGray2,
  //               fontSize: 23,
  //             }}>
  //             Back
  //           </Text>
  //         </View>
  //         <View style={{}}>
  //           <Ionicons
  //             name="arrow-back-outline"
  //             size={30}
  //             color={
  //               checked_Landmark && checked_house_no
  //                 ? COLORS.mobile_theme_back
  //                 : COLORS.lightGray3
  //             }
  //             style={{}}
  //           />
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  //   {/* Forward */}
  //   <View
  //     style={{
  //       left: SIZES.width * 0.6,
  //       width: 70,
  //       // backgroundColor: COLORS.mobile_theme_back,
  //     }}>
  //     <TouchableOpacity
  //       onPress={() => {
  //         if (checked_Landmark && checked_house_no) {
  //           console.log('Done');
  //           next_page();
  //         } else {
  //           showErrorToast((title = 'Fill All Required Details'));
  //           console.log('ckicked');
  //         }
  //       }}>
  //       <View style={{flexDirection: 'row'}}>
  //         <View style={{flex: 1, top: 2}}>
  //           <Text
  //             style={{
  //               color:
  //                 checked_Landmark && checked_house_no
  //                   ? COLORS.mobile_theme_back
  //                   : COLORS.lightGray2,
  //               fontSize: 23,
  //             }}>
  //             Next
  //           </Text>
  //         </View>
  //         <View style={{}}>
  //           <Ionicons
  //             name="arrow-forward-outline"
  //             size={30}
  //             color={

  //                 ? COLORS.mobile_theme_back
  //                 : COLORS.lightGray3
  //             }
  //             style={{}}
  //           />
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  // </View>
  //   );
  // };
  function next_page() {
    navigation.navigate('MoreProperty');
    console.log('next pagee');
  }
  function onPress_for() {
    if (checked_Landmark && checked_house_no) {
      console.log('Done');
      next_page();
    } else {
      showErrorToast((title = 'Fill All Required Details'));
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
          <NumericInput />
        </View>
        {/* Bijli ka bil */}
        <View style={{marginTop: 25}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Upload Bijli ka bill (image of pdf) (tumhara papa nai dega)
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
