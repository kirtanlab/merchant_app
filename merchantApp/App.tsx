import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import rootReducer from './store/persistReducer';
import Tabs from './navigation/tabs';
import SplashScreen from './screens/AuthScreens/SplashScreen';
import LoginScreen from './screens/AuthScreens/LoginScreen';
import SignupScreen from './screens/AuthScreens/SignupScreen';
import dummy from './screens/dummy';
import {View, Text, SafeAreaView} from 'react-native';
import BasicDetails from './screens/Newproperty/BasicDetails';
import Location from './screens/Newproperty/Location';
import Details2 from './screens/Newproperty/Thankyou';
import Thankyou from './screens/Newproperty/Thankyou';
import Basic1 from './screens/NewRooms/Basic1';
import Basic2 from './screens/NewRooms/Basic2';
import Basic3 from './screens/NewRooms/Basic3';
import ForgetPass from './screens/AuthScreens/ForgetPass';
import OTPScreen from './screens/AuthScreens/OTPScreen';
import NewPassword from './screens/AuthScreens/NewPassword';
import more_property from './screens/Newproperty/more_property';
const Loading = () => {
  return <Text>Loading New</Text>;
};

const store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

const App = () => {
  const Newproperty = () => {
    return (
      // <SafeAreaView style={{flex: 1, backgroundColor: '#FF5236'}}>

      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MoreProperty"
          component={more_property}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BasicDetails"
          component={BasicDetails}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Location"
          component={Location}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Thankyou"
          component={Thankyou}
        />
      </Stack.Navigator>
      // </SafeAreaView>/
    );
  };
  const NewRooms = () => {
    return (
      // <SafeAreaView style={{flex: 1, backgroundColor: '#FF5236'}}>

      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Basic2"
          component={Basic2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Basic1"
          component={Basic1}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Basic3"
          component={Basic3}
        />
      </Stack.Navigator>
      // </SafeAreaView>/
    );
  };
  const Root = () => {
    return (
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        /> */}

        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SignupScreen"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgetPassword"
          component={ForgetPass}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OTPScreen"
          component={OTPScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="NewPassword"
          component={NewPassword}
        />
      </Stack.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Newproperty'}>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />

          <Stack.Screen
            // options={{headerShown: false}}
            name="Newproperty"
            component={Newproperty}
          />
          <Stack.Screen
            // options={{headerShown: false}}
            name="NewRooms"
            component={NewRooms}
          />
          {/* <Stack.Screen name="MainLayout" component={Tabs} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
