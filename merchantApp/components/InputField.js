import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, SIZES} from '../constants';
import * as AuthActions from '../store/auth/authActions';
import * as NewPropertyActions from '../store/Newproperty/newproperty_action';
import * as NewRoomActions from '../store/NewRooms/Newrooms_actions';
function InputField({
  label,
  icon,
  inputType,
  onChange,
  keyboardType,
  fieldButtonLabel,
  type,
  multiline,
  password,
  fieldButtonFunction,
  updatesign_name,
  updatesign_password,
  updatesign_conf_password,
  updatesign_email,
  sign_email_focused,
  sign_name_focused,
  sign_password_focused,
  sign_conf_pass_focused,
  sign_email_checked,
  sign_name_checked,
  sign_pass_checked,
  sign_conf_pass_checked,
  checked_sign_name,
  focused_sign_name,
  gen_sign_err_method,
  login_pass_checked,
  login_email_checked,
  updatelogin_email,
  updatelogin_pass,
  update_phone,
  phone_checked,
  phone_focused,
  update_adhar_name,
  focused_adhar_name,
  checked_adhar_name,
  checked_house_no,
  checked_description_pg,
  checked_location,
  checked_landmark,
  focused_house_no,
  focused_description_pg,
  focused_landmark,
  focused_location,
  update_house_no,
  update_description_pg,
  update_landmark,
  update_location,
  updateAC,
  updatePrices,
  updatetitle,
  updateAttached,
  checkedtitle,
  checkedAC,
  checkedAttached,
  checkedPrices,
  focusedAC,
  focusedAttached,
  focusedPrices,
  focusedtitle,
  onBlur,
  onFocus,
  focusedOccupancy,
  focusedTotalAvai,
  updateOccupancy,
  updatetotalAval,
  checkedAvailableRoom,
  checkedoccupancy,
}) {
  let [sign_name_color, set_sign_name_color] = useState('#ccc');
  let err = false;
  let checked = true;
  const [_pass, setPassword] = useState('');
  useEffect(() => {
    if (err) {
      set_sign_name_color('red');
    } else if (checked) {
      set_sign_name_color('green');
    }
  }, [err, checked]);

  function render_field() {
    function validate_name(val) {
      var regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
      return regex.test(val);
    }
    function validate_phone(val) {
      var regex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
      // var regex = /^[6-9][0-9]{9}$/;
      return regex.test(val);
    }
    function validate_email(val) {
      var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return regex.test(val);
    }
    function validate_password(val) {
      var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      return regex.test(val);
    }
    function validate_conf_password(val, _pass) {
      console.log('lolmlol', password);
      if (val == password) {
        sign_conf_pass_checked(true);
      }
      return val == password;
    }
    if (type == 'sign_password') {
      return (
        <TextInput
          onFocus={e => {
            sign_password_focused(true);
            gen_sign_err_method(false);
          }}
          onBlur={() => {
            sign_password_focused(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          secureTextEntry={true}
          onChange={value => {
            console.log('haha', value.nativeEvent.text);
            // sign_conf_pass_checked(false);
            validate_conf_password();
            setPassword(value.nativeEvent.text);
            console.log(_pass, 'clear');
            // console.log('handeled', value.nativeEvent.text);
            if (validate_password(value.nativeEvent.text)) {
              sign_pass_checked(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              updatesign_password(value.nativeEvent.text);
            } else {
              sign_pass_checked(false);
            }
          }}
        />
      );
    }
    if (type == 'new_password') {
      return (
        <TextInput
          // pointerEvents="
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          // editable={false}
          contextMenuHidden={true}
          // selectTextOnFocus={false}
          onChange={onChange}
        />
      );
    }
    if (type == 'sign_email') {
      return (
        <TextInput
          onFocus={e => {
            sign_email_focused(true);
            gen_sign_err_method(false);
            // sign_email_checked(false);
          }}
          onBlur={() => {
            sign_email_focused(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          onChange={value => {
            if (validate_email(value.nativeEvent.text)) {
              sign_email_checked(true);
              // sign_email_focused(false);
              updatesign_email(value.nativeEvent.text);
            } else {
              sign_email_checked(false);
            }
          }}
        />
      );
    }
    if (type == 'sign_name') {
      return (
        <TextInput
          onFocus={e => {
            sign_name_focused(true);
            gen_sign_err_method(false);
          }}
          onBlur={() => {
            sign_name_focused(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          onChange={value => {
            if (validate_name(value.nativeEvent.text)) {
              sign_name_checked(true);
              // sign_name_focused(false);
              updatesign_name(value.nativeEvent.text);
            } else {
              sign_name_checked(false);
            }
          }}
        />
      );
    }
    if (type === 'sign_conf_password') {
      return (
        <TextInput
          onFocus={e => {
            sign_conf_pass_focused(true);
            console.log('focused', _pass);
            gen_sign_err_method(false);
          }}
          onBlur={() => {
            sign_conf_pass_focused(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          onChange={value => {
            console.log(_pass, 'maybe');
            if (validate_conf_password(value.nativeEvent.text, _pass)) {
              sign_conf_pass_checked(true);
              // sign_conf_pass_focused(false);
              updatesign_conf_password(value.nativeEvent.text);
            } else {
              sign_conf_pass_checked(false);
            }
          }}
        />
      );
    }
    if (type == 'login_email') {
      return (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          onChange={value => {
            // console.log('handeled', value.nativeEvent.text);
            // updatesign_email(value.nativeEvent.text);
            if (value != '') {
              login_email_checked(true);
              updatelogin_email(value.nativeEvent.text);
            } else {
              login_pass_checked(false);
            }
          }}
        />
      );
    }
    if (type == 'forget_email') {
      return (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          onChange={onChange}
        />
      );
    }

    if (type == 'login_password') {
      return (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          secureTextEntry={true}
          onChange={value => {
            // console.log('handeled', value.nativeEvent.text);
            value = value.nativeEvent.text;
            // updatesign_password(value.nativeEvent.text);
            if (value !== '') {
              login_pass_checked(true);
              updatelogin_pass(value);
            } else {
              login_pass_checked(false);
            }
          }}
        />
      );
    }
    if (type == 'Adhar_Name') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering focued');
            focused_adhar_name(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued');
            focused_adhar_name(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: -10,
            fontSize: 19,
          }}
          // secureTextEntry={true}
          onChange={value => {
            console.log('handeled', value.nativeEvent.text);
            // updatesign_password(value.nativeEvent.text);
            value = value.nativeEvent.text;
            if (value !== '') {
              checked_adhar_name(true);
              update_adhar_name(value);
            } else {
              checked_adhar_name(false);
            }
          }}
        />
      );
    }
    if (type == 'totalRooms') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering totalRooms');
            focusedTotalAvai(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued');
            focusedTotalAvai(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          // secureTextEntry={true}
          onChange={value => {
            // console.log('handeled', value.nativeEvent.text);
            value = Number(value.nativeEvent.text);
            if (value >= 1 && value % 1 == 0) {
              console.log('etnereed green');
              checkedAvailableRoom(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              updatetotalAval(value);
            } else {
              checkedAvailableRoom(false);
            }
          }}
        />
      );
    }
    if (type == 'occupancy') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering occupacny');
            focusedOccupancy(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued');
            focusedOccupancy(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          // secureTextEntry={true}
          onChange={value => {
            // console.log('handeled', value.nativeEvent.text);
            value = Number(value.nativeEvent.text);
            if (value >= 1 && value % 1 == 0) {
              console.log('etnereed green');
              checkedoccupancy(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              updateOccupancy(value);
            } else {
              checkedoccupancy(false);
            }
          }}
        />
      );
    }
    if (type == 'phone') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering focued');
            phone_focused(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued');
            phone_focused(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          // secureTextEntry={true}
          onChange={value => {
            // console.log('handeled', value.nativeEvent.text);
            value = Number(value.nativeEvent.text);
            if (validate_phone(value)) {
              console.log('etnereed green');
              phone_checked(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              update_phone(value);
            } else {
              phone_checked(false);
            }
          }}
        />
      );
    }
    if (type == 'prices') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering focued');
            focusedPrices(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued');
            focusedPrices(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 4,
            fontSize: 19,
          }}
          // secureTextEntry={true}
          onChange={value => {
            let value_string = value.nativeEvent.text;
            // console.log('handeled', value.nativeEvent.text.length);
            value = Number(value.nativeEvent.text);
            console.log('value_prices', value);
            if (value !== ' ' && value !== 0 && value_string.length >= 3) {
              console.log('etnereed green');
              checkedPrices(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              updatePrices(value);
            } else {
              checkedPrices(false);
            }
          }}
        />
      );
    }
    if (type == 'room_title') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering focued House No');
            focusedtitle(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued House No');
            focusedtitle(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            height: 40,
            marginLeft: 4,
            flex: 1,
            borderBottomWidth: 1,
            borderColor: '#d1cfcf',
            marginTop: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingBottom: 9,
            fontSize: 18,
            color: '#212121',
          }}
          // secureTextEntry={true}
          onChange={value => {
            value = value.nativeEvent.text;
            // console.log('hande
            // console.log('handeled', value.nativeEvent.text);
            // value = Number(value.nativeEvent.text);
            if (value !== '') {
              console.log('etnereed house no');
              checkedtitle(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              updatetitle(value);
            } else {
              checkedtitle(false);
            }
          }}
        />
      );
    }
    if (type == 'House_No') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering focued House No');
            focused_house_no(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued House No');
            focused_house_no(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 4,
            fontSize: 19,
          }}
          // secureTextEntry={true}
          onChange={value => {
            value = value.nativeEvent.text;
            // console.log('hande
            // console.log('handeled', value.nativeEvent.text);
            // value = Number(value.nativeEvent.text);
            if (value !== '') {
              console.log('etnereed house no');
              checked_house_no(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              update_house_no(value);
            } else {
              checked_house_no(false);
            }
          }}
        />
      );
    }
    if (type == 'Description_pg') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering focued House No');
            focused_description_pg(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued House No');
            focused_description_pg(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 4,
            fontSize: 19,
          }}
          // secureTextEntry={true}
          onChange={value => {
            value = value.nativeEvent.text;
            // console.log('handeled', value.nativeEvent.text);
            // value = Number(value.nativeEvent.text);
            if (value !== '') {
              console.log('etnereed house no');
              checked_description_pg(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              update_description_pg(value);
            } else {
              checked_description_pg(false);
            }
          }}
        />
      );
    }
    if (type == 'Landmark') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering focued landmark');
            focused_landmark(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued landmark');
            focused_landmark(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 4,
            fontSize: 19,
          }}
          // secureTextEntry={true}
          onChange={value => {
            // console.log('handeled', value.nativeEvent.text);
            value = value.nativeEvent.text;
            if (value !== '') {
              console.log('etnereed landmark');
              checked_landmark(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              update_landmark(value);
            } else {
              checked_landmark(false);
            }
          }}
        />
      );
    }
    if (type == 'Terms_pg') {
      return (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          multiline={multiline ? true : false}
          style={{
            // flex: 1,
            paddingVertical: 5,
            // borderBottomColor: COLORS.lightGray4,
            // borderBottomWidth: 1,
            // paddingBottom: 4,
            fontSize: 19,
            // paddingRight: 10,
            lineHeight: 23,
            flex: 2,
            textAlignVertical: 'top',
            height: 64,
            borderRadius: SIZES.form_button_borderRadius,
            borderWidth: 1,
            borderColor: COLORS.lightGray4,
            // shadowColor: '#000',

            // elevation: 5,
          }}
          // secureTextEntry={true}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      );
    }
    if (type == 'About_pg') {
      return (
        <TextInput
          // onFocus={() => {
          //   console.log('Entering focued landmark');
          //   focused_landmark(true);
          //   // gen_sign_err_method(false);
          // }}
          // onBlur={() => {
          //   console.log('!Entering focued landmark');
          //   focused_landmark(false);
          // }}
          placeholder={label}
          keyboardType={keyboardType}
          multiline={multiline ? true : false}
          style={{
            paddingVertical: -2,
            borderBottomColor: COLORS.lightGray4,
            borderBottomWidth: 1,
            fontSize: 19,
            lineHeight: 23,
            width: SIZES.width * 0.88,
            textAlignVertical: 'top',
            minHeight: 50,
            maxHeight: 180,
            fontWeight: 'bold',
            borderWidth: 1,
            borderColor: COLORS.lightGray4,
          }}
          // secureTextEntry={true}
          onChange={onChange}
        />
      );
    }
    if (type == 'Extra_description') {
      return (
        <TextInput
          // onFocus={() => {
          //   console.log('Entering focued landmark');
          //   focused_landmark(true);
          //   // gen_sign_err_method(false);
          // }}
          // onBlur={() => {
          //   console.log('!Entering focued landmark');
          //   focused_landmark(false);
          // }}
          placeholder={label}
          keyboardType={keyboardType}
          multiline={multiline ? true : false}
          style={{
            // flex: 1,
            paddingVertical: -2,
            borderBottomColor: COLORS.lightGray4,
            borderBottomWidth: 1,
            // paddingBottom: 4,
            fontSize: 19,
            // paddingRight: 10,
            lineHeight: 23,
            flex: 2,
            textAlignVertical: 'top',
            minHeight: 50,
            maxHeight: 200,
            borderWidth: 1,
            borderColor: COLORS.lightGray4,
          }}
          // secureTextEntry={true}
          onChange={value => {
            // console.log('handeled', value.nativeEvent.text);
            value = value.nativeEvent.text;
            if (value !== '') {
              console.log('etnereed landmark');
              checked_landmark(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              update_landmark(value);
            } else {
              checked_landmark(false);
            }
          }}
        />
      );
    }

    if (type == 'Search_Location') {
      return (
        <TextInput
          onFocus={() => {
            console.log('Entering focued House No');
            focused_house_no(true);
            // gen_sign_err_method(false);
          }}
          onBlur={() => {
            console.log('!Entering focued House No');
            focused_house_no(false);
          }}
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 4,
            fontSize: 19,
          }}
          // secureTextEntry={true}
          onChange={value => {
            // console.log('handeled', value.nativeEvent.text);
            value = Number(value.nativeEvent.text);
            if (value !== '') {
              console.log('etnereed house no');
              checked_house_no(true);
              // gen_sign_err_method(false);
              // sign_password_focused(false);
              update_house_no(value);
            } else {
              checked_house_no(false);
            }
          }}
        />
      );
    }
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {render_field()}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text
          style={{
            color: COLORS.mobile_theme_back,
            fontWeight: 'bold',
            // left: 100,
            marginTop: 15,
            fontSize: 16,
          }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    password: state.authReducer.sign_password,

    checked_sign_name: state.authReducer.checked_sign_name,
    focused_sign_name: state.authReducer.focused_sign_name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //NewRoom
    updateExtraDescription: value => {
      dispatch(NewRoomActions.updateExtraDescription(value));
    },

    checkedtitle: value => {
      return dispatch(NewRoomActions.checkedtitle(value));
    },
    checkedPrices: value => {
      return dispatch(NewRoomActions.checkedPrices(value));
    },
    focusedtitle: value => {
      return dispatch(NewRoomActions.focusedtitle(value));
    },
    focusedPrices: value => {
      return dispatch(NewRoomActions.focusedPrices(value));
    },
    updatetitle: value => {
      return dispatch(NewRoomActions.updatetitle(value));
    },
    updatetotalAval: value => {
      return dispatch(NewRoomActions.updatetotalAval(value));
    },
    updateOccupancy: value => {
      return dispatch(NewRoomActions.updateOccupancy(value));
    },
    focusedTotalAvai: value => {
      return dispatch(NewRoomActions.focusedTotalAvai(value));
    },
    focusedOccupancy: value => {
      return dispatch(NewRoomActions.focusedOccupancy(value));
    },
    checkedAvailableRoom: value => {
      return dispatch(NewRoomActions.checkedAvailableRoom(value));
    },
    checkedoccupancy: value => {
      return dispatch(NewRoomActions.checkedoccupancy(value));
    },
    updatePrices: value => {
      return dispatch(NewRoomActions.updatePrices(value));
    },

    // location
    checked_house_no: value => {
      return dispatch(NewPropertyActions.checked_house_no(value));
    },
    checked_description_pg: value => {
      return dispatch(NewPropertyActions.checked_description_pg(value));
    },
    checked_location: value => {
      return dispatch(NewPropertyActions.checked_location(value));
    },
    checked_landmark: value => {
      return dispatch(NewPropertyActions.checked_landmark(value));
    },
    //location focusd
    focused_house_no: value => {
      return dispatch(NewPropertyActions.focused_house_no(value));
    },
    focused_description_pg: value => {
      return dispatch(NewPropertyActions.focused_description_pg(value));
    },
    focused_landmark: value => {
      return dispatch(NewPropertyActions.focused_landmark(value));
    },
    focused_location: value => {
      return dispatch(NewPropertyActions.focused_location(value));
    },
    //update loaction
    update_house_no: value => {
      return dispatch(NewPropertyActions.update_house_no(value));
    },
    update_description_pg: value => {
      return dispatch(NewPropertyActions.update_description_pg(value));
    },
    update_landmark: value => {
      return dispatch(NewPropertyActions.update_landmark(value));
    },
    update_location: value => {
      return dispatch(NewPropertyActions.update_location(value));
    },

    checked_adhar_name: value => {
      return dispatch(AuthActions.adhar_name_checked(value));
    },
    focused_adhar_name: value => {
      return dispatch(AuthActions.adhar_name_focused(value));
    },
    update_adhar_name: value => {
      return dispatch(AuthActions.update_adhar_name(value));
    },
    update_phone: value => {
      return dispatch(AuthActions.update_phone(value));
    },
    updatelogin_email: value => {
      return dispatch(AuthActions.updatelogin_email(value));
    },
    updatelogin_pass: value => {
      return dispatch(AuthActions.updatelogin_pass(value));
    },
    updatesign_name: value => {
      return dispatch(AuthActions.updatesign_name(value));
    },
    updatesign_password: value => {
      return dispatch(AuthActions.updatesign_password(value));
    },
    updatesign_conf_password: value => {
      return dispatch(AuthActions.updatesign_conf_password(value));
    },
    updatesign_email: value => {
      return dispatch(AuthActions.updatesign_email(value));
    },
    sign_email_focused: value => {
      return dispatch(AuthActions.sign_email_focused(value));
    },
    phone_focused: value => {
      return dispatch(AuthActions.phone_focused(value));
    },
    sign_name_focused: value => {
      return dispatch(AuthActions.sign_name_focused(value));
    },
    sign_password_focused: value => {
      return dispatch(AuthActions.sign_password_focused(value));
    },
    sign_conf_pass_focused: value => {
      return dispatch(AuthActions.sign_conf_pass_focused(value));
    },
    sign_email_checked: value => {
      return dispatch(AuthActions.sign_email_checked(value));
    },
    sign_name_checked: value => {
      return dispatch(AuthActions.sign_name_checked(value));
    },
    phone_checked: value => {
      return dispatch(AuthActions.phone_checked(value));
    },
    sign_pass_checked: value => {
      return dispatch(AuthActions.sign_pass_checked(value));
    },
    sign_conf_pass_checked: value => {
      return dispatch(AuthActions.sign_conf_pass_checked(value));
    },
    gen_sign_err_method: value => {
      return dispatch(AuthActions.gen_sign_err(value));
    },
    login_pass_checked: value => {
      return dispatch(AuthActions.login_pass_checked(value));
    },
    login_email_checked: value => {
      return dispatch(AuthActions.login_email_checked(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
