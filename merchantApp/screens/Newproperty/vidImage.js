import React, {Fragment, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/NewProperty/Header';
import * as Progress from 'react-native-progress';
import {Button, Dialog, Portal, Provider} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import CustomButton_form from '../../components/NewProperty/CustomButton_form';
import Amneties from '../../components/NewProperty/Amneties';
import Nav_Header from '../../components/NewProperty/Nav_Header';
import AddText from '../../components/NewProperty/AddText';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as vidImage_actions from '../../store/vidImage/vidImage_actions';
import Video from 'react-native-video';

import {
  toastConfig,
  showErrorToast,
} from '../../components/NewProperty/ToastConfig';
const vidImage = ({
  checkedOuterVideos,
  updateOuterVideos,
  checkedOuterImages,
  updateOuterImages,
  outerVideos,
  checked_outer_video,
  outerImages,
  checked_outer_image,
  navigation,
}) => {
  const [imgUri, setimgUri] = React.useState(outerImages);
  const [vidUri, setvidUri] = React.useState(outerVideos);
  function next_page() {
    navigation.navigate('Thankyou');
    console.log('next pagee');
  }
  function onPress_for() {
    if (checkedOuterImages && checkedOuterVideos) {
      console.log('Done');
      next_page();
    } else {
      showErrorToast((title = 'Fill All Required Details'));
      console.log('ckicked');
    }
  }
  function back_page() {
    navigation.navigate('MoreProperty');
    console.log('back pagee');
  }
  const selectDoc_multiple_image = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      console.log(res.length);
      if (res?.length > 10) {
        showErrorToast((title = 'Maximum 10 Images'));
      } else if (res?.length + imgUri?.length > 10) {
        showErrorToast((title = 'Maximum 10 Images'));
      } else {
        let temp = outerImages;
        temp = temp.concat(res);
        console.log('completed', temp);
        setimgUri(temp);
        console.log('completed1');
        updateOuterImages(temp);
        console.log('completed2', outerImages);
      }
      // setimgUri(res);
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

      if (res?.length > 10) {
        showErrorToast((title = 'Maximum 10 Images'));
      } else if (res?.length + vidUri?.length > 10) {
        showErrorToast((title = 'Maximum 10 Videos'));
      } else {
        let temp = outerVideos;
        temp = temp.concat(res);
        console.log('completed', temp);
        setvidUri(temp);
        console.log('completed1');
        updateOuterVideos(temp);
        console.log('completed2', outerVideos);
        // let temp = outerImages;
        // temp = temp.concat(res);
        // console.log('completed', temp);
        // setimgUri(temp);
        // console.log('completed1');
        // updateOuterImages(temp);
        // console.log('completed2', outerImages);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled videos', err);
      } else {
        console.log(err);
      }
    }
  };
  const render_video = vidUri => {
    console.log('render_video', vidUri);
    return (
      <View
        style={{
          flexDirection: 'row',

          marginTop: 15,
          marginRight: 15,
        }}>
        <View
          style={{
            borderColor: COLORS.lightGray3,
          }}>
          <Video
            source={{uri: vidUri}} // Can be a URL or a local file.
            paused={false}
          />
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            left: '82%',
            borderRadius: 10,

            fontSize: SIZES.h2,
            backgroundColor: COLORS.mobile_theme_back,
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
    );
  };
  const redner_images = imgUri => {
    console.log('render_iamges', imgUri);
    return (
      <View
        style={{
          flexDirection: 'row',

          marginTop: 15,
          marginRight: 15,
        }}>
        <View
          style={{
            borderColor: COLORS.lightGray3,
          }}>
          <Image
            source={{uri: imgUri}}
            style={{height: 200, borderRadius: 10, width: 230}}
          />
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            left: '82%',
            borderRadius: 10,

            fontSize: SIZES.h2,
            backgroundColor: COLORS.mobile_theme_back,
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
    );
  };
  // const redner_videos = imgUri => {
  //   console.log('render_iamges', imgUri);
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',

  //         marginTop: 15,
  //         marginRight: 15,
  //       }}>
  //       <View
  //         style={{
  //           borderColor: COLORS.lightGray3,
  //         }}>
  //         <Image
  //           source={{uri: imgUri}}
  //           style={{height: 200, borderRadius: 10, width: 230}}
  //         />
  //       </View>

  //       <TouchableOpacity
  //         style={{
  //           position: 'absolute',
  //           left: '82%',
  //           borderRadius: 10,

  //           fontSize: SIZES.h2,
  //           backgroundColor: COLORS.mobile_theme_back,
  //         }}
  //         onPress={() => {
  //           setimgUri(undefined);
  //         }}>
  //         <Ionicons
  //           name="close-circle-outline"
  //           size={35}
  //           color={true ? COLORS.white : 'lightgray'}
  //           style={{}}
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: 'white'}}>
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
          progress={1}
          color={COLORS.progress_bar}
          width={SIZES.width}
          height={SIZES.height * 0.01}
          style={{position: 'absolute', top: -1}}
        />
        <Nav_Header
          onPress_forward={onPress_for}
          onPress_back={back_page}
          color={COLORS.mobile_theme_back}
          icon_color={COLORS.mobile_theme_back}
          back={true}
        />
      </View>
      <View style={{padding: 15, marginTop: 25}}>
        <View>
          <Header
            step={4}
            subtitle={"Propertie's outer image,video"}
            title={'Videos and Images of Property'}
          />
        </View>

        {/* Outer Images */}
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.h2,
              fontWeight: 'bold',
              marginTop: 25,
              flex: 1,
            }}>
            Outer Images{'  '}({imgUri.length} out of 10)
          </Text>

          {imgUri === undefined ||
            (imgUri?.length <= 10 && (
              <View style={{marginTop: 11, flex: 0.6}}>
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    borderColor: COLORS.mobile_theme,
                    borderWidth: SIZES.form_button_borderWidth,
                    borderRadius: SIZES.form_button_borderRadius,
                    minWidth: SIZES.form_button_minWidth - 10,
                    maxWidth: SIZES.form_button_maxWidth - 20,
                    maxHeight: SIZES.form_button_maxHeight - 5,
                    padding: SIZES.form_button_padding - 2,
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
                      fontSize: SIZES.h2 - 3,
                      fontWeight: SIZES.form_button_text_fontWeight,
                      color: COLORS.font_color,
                    }}>
                    Select Image
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
        {imgUri.length > 0 && (
          <FlatList
            data={imgUri}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={images => redner_images(images.item.uri)}
          />
        )}
        {/* Outer Videso */}
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.h2,
              fontWeight: 'bold',
              marginTop: 25,
              flex: 1,
            }}>
            Outer Videos{'  '}({vidUri.length} out of 10)
          </Text>

          {vidUri === undefined ||
            (vidUri?.length <= 10 && (
              <View style={{marginTop: 11, flex: 0.6}}>
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    borderColor: COLORS.mobile_theme,
                    borderWidth: SIZES.form_button_borderWidth,
                    borderRadius: SIZES.form_button_borderRadius,
                    minWidth: SIZES.form_button_minWidth - 10,
                    maxWidth: SIZES.form_button_maxWidth - 20,
                    maxHeight: SIZES.form_button_maxHeight - 5,
                    padding: SIZES.form_button_padding - 2,
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
                      fontSize: SIZES.h2 - 3,
                      fontWeight: SIZES.form_button_text_fontWeight,
                      color: COLORS.font_color,
                    }}>
                    Select Video
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
        {vidUri.length > 0 && (
          <FlatList
            data={vidUri}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={video => render_video(video.item.uri)}
          />
        )}

        {/* Outer videos
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.h2,
              fontWeight: 'bold',
              marginTop: 25,
              flex: 1,
            }}>
            Outer Videos{'  '}({vidUri.length} out of 10)
          </Text>

          {vidUri === undefined ||
            (vidUri?.length <= 10 && (
              <View style={{marginTop: 11, flex: 0.8}}>
                <TouchableOpacity
                  style={{
                    marginTop: 15,

                    borderColor: COLORS.mobile_theme,
                    borderWidth: SIZES.form_button_borderWidth,
                    borderRadius: SIZES.form_button_borderRadius,
                    minWidth: SIZES.form_button_minWidth - 10,
                    maxWidth: SIZES.form_button_maxWidth - 20,
                    maxHeight: SIZES.form_button_maxHeight - 5,
                    padding: SIZES.form_button_padding - 2,
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
                      fontSize: SIZES.h2 - 4,
                      fontWeight: SIZES.form_button_text_fontWeight,
                      color: COLORS.font_color,
                    }}>
                    Select Video
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>

        {vidUri.length > 1 && (
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
              {vidUri[0]?.name}
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
        )} */}
      </View>
    </ScrollView>
  );
};
function mapStateToProps(state) {
  return {
    checked_outer_image: state.vidImage_reducer.checked_outer_image,
    outerImages: state.vidImage_reducer.outerImages,
    checked_outer_video: state.vidImage_reducer.checked_outer_video,
    outerVideos: state.vidImage_reducer.outerVideos,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateOuterImages: value => {
      dispatch(vidImage_actions.updateOuterImages(value));
    },
    checkedOuterImages: value => {
      dispatch(vidImage_actions.checkedOuterImages(value));
    },
    updateOuterVideos: value => {
      dispatch(vidImage_actions.updateOuterVideos(value));
    },
    checkedOuterVideos: value => {
      dispatch(vidImage_actions.checkedOuterVideos(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(vidImage);
