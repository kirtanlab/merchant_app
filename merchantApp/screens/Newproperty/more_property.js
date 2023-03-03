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
import {connect} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import CustomButton_form from '../../components/NewProperty/CustomButton_form';
import Amneties from '../../components/NewProperty/Amneties';
import AddText from '../../components/NewProperty/AddText';
const more_property = ({navigation}) => {
  function next_page() {
    navigation.navigate('Thankyou');
    console.log('next pagee');
  }
  //   const selectDoc = async () => {
  //     try {
  //       const res = await DocumentPicker.pickSingle({
  //         type: [DocumentPicker.types.images],
  //       });
  //       console.log(res);
  //     } catch (err) {
  //       if (DocumentPicker.isCancel(err)) {
  //         console.log('User cancelled', err);
  //       } else {
  //         console.log(err);
  //       }
  //     }
  //   };
  const selectDoc_multiple_image = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      console.log(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled images', err);
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
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled videos', err);
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
          height={SIZES.height * 0.01}
          style={{position: 'absolute', top: -1}}
        />
      </View>
      <View style={{padding: 15, marginTop: 45}}>
        <View>
          <Header
            step={3}
            subtitle={"Propertie's amneties,image,video,description"}
            title={'More about Property'}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Amneties />
        </View>

        <View>
          <AddText />
        </View>

        {/* Images */}
        <View style={{marginTop: 0}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Select Images
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
              selectDoc_multiple_image();
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
        {/* Videos */}
        <View style={{marginTop: 25}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Select Videos
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
              selectDoc_multiple_video();
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

      <View style={{marginTop: '15%'}}>
        <CustomButton_form
          fontColor={true ? COLORS.font_color : COLORS.lightGray3}
          backgroundColor={true ? COLORS.mobile_theme_back : COLORS.lightGray4}
          label={'Go for Next Step '}
          _borderColor={true ? COLORS.mobile_theme_back : COLORS.lightGray4}
          borderRadius
          onPress={() => {
            if (true) {
              console.log('Done');
              next_page();
            } else {
            }
          }}
        />
      </View>
    </ScrollView>
  );
};
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(more_property);
