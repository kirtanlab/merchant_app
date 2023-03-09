import React from 'react';
import {View, Text, LogBox} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
{
  /* <ion-icon name="notifications-outline"></ion-icon> */
}
const Notifications = () => {
  return (
    <View
      style={{
        paddingHorizontal: 12,
        // paddingVertical: 10,
        paddingBottom: 50,
        // bottom: 10,
        minHeight: 110,
        maxHeight: 200,
        flexDirection: 'column',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            //   width: 100,
            height: 100,
          }}>
          <Ionicons
            name="notifications-circle-outline"
            size={80}
            color={true ? COLORS.mobile_theme_back : 'red'}
            style={{
              alignItems: 'center',
            }}
          />
        </View>
        <View style={{top: '15%', left: 10, flexDirection: 'row'}}>
          <Text
            style={{
              color: COLORS.lightGray2,
              fontWeight: 'bold',
              fontSize: 40,
            }}>
            0{' '}
          </Text>
          <Text style={{color: COLORS.lightGray2, fontSize: 30, top: '7%'}}>
            Views
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', left: 10, top: -10}}>
        <View>
          <Text style={{color: COLORS.lightGray2, fontSize: 20}}>
            View Total Interested Users{' '}
          </Text>
        </View>
        <View>
          <Ionicons
            name="arrow-forward-outline"
            size={25}
            style={{color: COLORS.lightGray2, top: -2}}
          />
        </View>
      </View>
    </View>
  );
};
export default Notifications;
