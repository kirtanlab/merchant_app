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
import Terms from '../../components/Terms';
const Basic2 = ({
  navigation,
  extra_description,
  baseTerms,
  checked_base_terms,
}) => {
  function next_page() {
    navigation.navigate('Basic3');
  }
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
            subtitle={'Custom Description,Terms and Conditions'}
            title={'Extra Description '}
          />
        </View>
        {/* Landmark */}
        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Enter Description
          </Text>
        </View>
        <View style={{marginTop: 6}}>
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
        </View>
        <View style={{marginTop: '90%'}}>
          <Terms />
        </View>
        <View
          style={{
            marginTop: 30,
            position: 'relative',
            justifyContent: 'center',
            marginLeft: -15,
          }}>
          <CustomButton_form
            fontColor={
              checked_base_terms ? COLORS.font_color : COLORS.lightGray3
            }
            backgroundColor={
              checked_base_terms ? COLORS.mobile_theme_back : COLORS.lightGray4
            }
            label={'Go for Next Step '}
            _borderColor={
              checked_base_terms ? COLORS.mobile_theme_back : COLORS.lightGray4
            }
            borderRadius
            onPress={() => {
              if (checked_base_terms) {
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
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {
    checked_base_terms: state.Newrooms_reducer.checked_base_terms,
    baseTerms: state.Newrooms_reducer.baseTerms,
    extra_description: state.Newrooms_reducer.extra_description,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Basic2);
