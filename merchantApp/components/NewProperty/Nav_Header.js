import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Nav_Header = ({
  color,
  onPress_forward,
  onPress_back,
  icon_color,
  back,
}) => {
  return (
    <View
      style={
        {
          // top: ,
        }
      }>
      {back ? (
        <View
          style={{
            // flexDirection: 'row',
            // position: 'relative',
            // top: '6%',
            paddingBottom: 7,
            borderBottomColor: COLORS.lightGray4,
            borderBottomWidth: 1,
          }}>
          {/* //for covering purpose */}
          <View
            style={{
              left: SIZES.width * 0.04,
              width: 70,
              top: '50%',
              // top: 2,/
            }}>
            <TouchableOpacity onPress={onPress_back}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Ionicons
                    name="arrow-back-outline"
                    size={30}
                    color={COLORS.mobile_theme_back}
                    style={{}}
                  />
                </View>
                <View style={{top: 2}}>
                  <Text
                    style={{
                      color: COLORS.mobile_theme_back,
                      fontSize: 23,
                    }}>
                    Back
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* Forward */}
          <View
            style={{
              left: SIZES.width * 0.76,
              width: 70,
              // backgroundColor: COLORS.mobile_theme_back,
            }}>
            <TouchableOpacity onPress={onPress_forward}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, top: 2}}>
                  <Text
                    style={{
                      color: color,
                      fontSize: 23,
                    }}>
                    Next
                  </Text>
                </View>
                <View style={{}}>
                  <Ionicons
                    name="arrow-forward-outline"
                    size={30}
                    color={icon_color}
                    style={{}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            top: '6%',
            paddingBottom: 7,
            borderBottomColor: COLORS.lightGray4,
            borderBottomWidth: 1,
            // top: ,
          }}>
          <View
            style={{
              left: SIZES.width * 0.75,
              width: 70,
              // backgroundColor: COLORS.mobile_theme_back,
            }}>
            <TouchableOpacity onPress={onPress_forward}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, top: 2}}>
                  <Text
                    style={{
                      color: color,
                      fontSize: 23,
                    }}>
                    Next
                  </Text>
                </View>
                {/* <View style={{marginLeft: 10}}>
                
              </View> */}

                <View style={{}}>
                  <Ionicons
                    name="arrow-forward-outline"
                    size={30}
                    color={icon_color}
                    style={{}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Nav_Header;
