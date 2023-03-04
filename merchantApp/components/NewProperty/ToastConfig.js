import React from 'react';
import Toast, {
  ErrorToast,
  SuccessToast,
  InfoToast,
} from 'react-native-toast-message';

export const toastConfig = {
  success: props => (
    <SuccessToast
      {...props}
      text1Style={{
        fontSize: 16,
        fontWeight: '700',
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
      }}
      style={{
        width: 200,
        // marginBottom: 50,
        // bottom: 5,
        top: 9,
        height: 30,
      }}
    />
  ),

  info: props => (
    <InfoToast
      {...props}
      text1Style={{
        fontSize: 16,
        fontWeight: '700',
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
};

export const showSuccessToast = (title, text) => {
  Toast.show({
    type: 'success',
    text1: title,
    text2: text,
    position: 'bottom',
    visibilityTime: 3000,
    autoHide: true,
  });
};

export const showErrorToast = (title, text) => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: text,
    position: 'top',
    visibilityTime: 2000,
    autoHide: true,
  });
};

export const showInfoToast = (title, text) => {
  Toast.show({
    type: 'info',
    text1: title,
    text2: text,
    position: 'bottom',
    visibilityTime: 3000,
    autoHide: true,
  });
};
