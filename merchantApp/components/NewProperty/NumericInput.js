import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import InputField from '../../components/InputField';
import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {phone_checked} from '../../store/auth/authActions';
import {connect} from 'react-redux';
const NumericInput = ({
  Landmark,
  focused_Landmark,
  focused_Description_pg,
  focused_Location,
  focused_house_no,
  checked_house_no,
  checked_Location,
  checked_Landmark,
  // checked_Description_pg,
  // Description_pg,
  house_no,
  Location,
}) => {
  let [name, setName] = useState();
  let [err, setErr] = useState(true);
  //   let [phone, setPhone] = useState();
  //   console.log(focused_adhar_name);
  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        {/* House_No */}
        <View>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Enter House Number
          </Text>
        </View>
        <View>
          <View style={{marginTop: 6}}>
            <View style={{width: SIZES.width * 0.8}}>
              <InputField
                label={'House No.'}
                type={'House_No'}
                keyboardType={'default'}
                value={house_no}
                // icon={
                //   <Ionicons
                //     name="person-outline"
                //     size={30}
                //     color={err ? COLORS.mobile_theme : 'red'}
                //     style={{marginRight: 15, marginTop: 5, marginLeft: 5}}
                //   />
                // }
              />
            </View>
            {focused_house_no && !checked_house_no && (
              <View style={{marginTop: -30, left: 3, marginBottom: 20}}>
                <Text style={{color: COLORS.lightGray3}}>Fill this</Text>
              </View>
            )}
          </View>
        </View>
        {/* Description pg
        <View style={{marginTop: 0}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Description of Property
          </Text>
        </View>
        <View>
          <View style={{marginTop: 6}}>
            <View style={{width: SIZES.width * 0.8}}>
              <InputField
                label={'Description'}
                type={'Description_pg'}
                keyboardType={'default'}
                value={Description_pg}
                // icon={
                //   <Ionicons
                //     name="person-outline"
                //     size={30}
                //     color={err ? COLORS.mobile_theme : 'red'}
                //     style={{marginRight: 15, marginTop: 5, marginLeft: 5}}
                //   />
                // }
              />
            </View>

            {focused_Description_pg && !checked_Description_pg && (
              <View style={{marginTop: -30, left: 3, marginBottom: 20}}>
                <Text style={{color: COLORS.lightGray3}}>Fill it</Text>
              </View>
            )}
          </View>
        </View> */}
        {/* Landmark */}
        <View style={{marginTop: 0}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Enter Landmark
          </Text>
        </View>
        <View>
          <View style={{marginTop: 6}}>
            <View style={{width: SIZES.width * 0.8}}>
              <InputField
                label={'Landmark'}
                type={'Landmark'}
                keyboardType={'default'}
                value={Landmark}
                // icon={
                //   <Ionicons
                //     name="person-outline"
                //     size={30}
                //     color={err ? COLORS.mobile_theme : 'red'}
                //     style={{marginRight: 15, marginTop: 5, marginLeft: 5}}
                //   />
                // }
              />
            </View>

            {focused_Landmark && !checked_Landmark && (
              <View style={{marginTop: -30, left: 3, marginBottom: 20}}>
                <Text style={{color: COLORS.lightGray3}}>Fill it</Text>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

function mapStateToProps(state) {
  return {
    Landmark: state.newproperty_reducer.Landmark,
    focused_Landmark: state.newproperty_reducer.focused_Landmark,
    focused_Description_pg: state.newproperty_reducer.focused_Description_pg,
    focused_Location: state.newproperty_reducer.focused_Location,
    focused_house_no: state.newproperty_reducer.focused_house_no,
    checked_house_no: state.newproperty_reducer.checked_house_no,
    checked_Location: state.newproperty_reducer.checked_Location,
    checked_Landmark: state.newproperty_reducer.checked_Landmark,
    checked_Description_pg: state.newproperty_reducer.checked_Description_pg,
    Description_pg: state.newproperty_reducer.Description_pg,
    house_no: state.newproperty_reducer.house_no,
    Location: state.newproperty_reducer.Location,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NumericInput);
