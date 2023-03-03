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
const Floor_price = ({
  focused_price,
  focused_floor_no,
  checked_price,
  checked_floor_no,
  Floor_no,
  price,
}) => {
  let [name, setName] = useState();
  let [err, setErr] = useState(true);
  //   let [phone, setPhone] = useState();
  //   console.log(focused_adhar_name);
  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <View>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.custom1,
              fontWeight: 'bold',
            }}>
            Enter Floor Number
          </Text>
        </View>
        <View>
          {/* Floor Number */}
          <View style={{marginTop: 6}}>
            <View style={{width: SIZES.width * 0.8}}>
              <InputField
                label={'Floor No.'}
                type={'Floor_No'}
                keyboardType={'default'}
                value={Floor_no}
                // icon={
                //   <Ionicons
                //     name="person-outline"
                //     size={30}
                //     color={err ? COLORS.mobile_theme_back : 'red'}
                //     style={{marginRight: 15, marginTop: 5, marginLeft: 5}}
                //   />
                // }
              />
            </View>
            {focused_floor_no && !checked_floor_no && (
              <View style={{marginTop: -30, marginBottom: 20}}>
                <Text style={{color: COLORS.lightGray3, fontWeight: 'bold'}}>
                  Fill this
                </Text>
              </View>
            )}
          </View>
        </View>
        {/* Prices */}
        <View style={{marginTop: 0}}>
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
                color={checked_price ? COLORS.mobile_theme_back : 'lightgray'}
                style={{marginRight: 5, marginTop: 2}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {focused_price && !checked_price && (
          <View style={{marginTop: -30, left: 50, marginBottom: 20}}>
            <Text style={{color: COLORS.lightGray3}}>Enter Valid Prices</Text>
          </View>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

function mapStateToProps(state) {
  return {
    Floor_no: state.Newrooms_reducer.Floor_no,
    price: state.Newrooms_reducer.price,
    checked_floor_no: state.Newrooms_reducer.checked_floor_no,
    checked_price: state.Newrooms_reducer.checked_price,
    focused_floor_no: state.Newrooms_reducer.focused_floor_no,
    focused_price: state.Newrooms_reducer.focused_price,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Floor_price);
