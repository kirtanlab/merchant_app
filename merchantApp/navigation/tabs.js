import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {setTradeModelVisibility} from '../store/tab/tabActions';
import {Home, Portfolio, Market, Profile} from '../screens';
import {COLORS, icons} from '../constants';
import {TabIcon} from '../components';
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const Tabs = ({setTradeModelVisibility, isTradeModalVisible}) => {
  function tradeTabButtonOnClickHandler() {
    setTradeModelVisibility(!isTradeModalVisible);
  }
  const userData = useSelector(state => state.authReducer.userData);
  // let theme = userData.Appearance ? userData.Appearance : 'white';
  let theme = 'white';
  let home_icon;
  // function setValues(focused, Label) {
  //   if (focused && theme == 'White') {
  //     if (Label == 'Portfolio') {
  //       return icons.briefcase_Dark;
  //     }
  //   } else if (!focused && theme == 'White') {
  //     return icons.briefcase;
  //   } else if (focused && theme == 'Dark') {
  //     return icons.briefcase_Dark;
  //   } else {
  //     return icons.briefcase;
  //   }
  // }
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 70,
          backgroundColor: theme === 'Dark' ? COLORS.primary : COLORS.white,
          borderTopColor: 'gray',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={focused ? icons.Home_Dark : icons.Home}
                  label="Home"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={focused ? icons.briefcase_Dark : icons.briefcase}
                  label="Listing" //change it for change below icons
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={isTradeModalVisible ? icons.close : icons.trade}
                iconStyle={
                  isTradeModalVisible
                    ? {
                        width: 15,
                        height: 15,
                      }
                    : null
                }
                label="Rent "
                isTrade={true}
              />
            );
          },
          tabBarButton: props => (
            <TabBarCustomButton
              {...props}
              onPress={() => tradeTabButtonOnClickHandler()}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={focused ? icons.market_Dark : icons.market}
                  label="Notifications" //change it for change below icons
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            if (!isTradeModalVisible) {
              return (
                <TabIcon
                  focused={focused}
                  icon={focused ? icons.profile_Dark : icons.profile}
                  label="Profile"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: e => {
            if (isTradeModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

// export default Tabs;

// //export defualt Tabs;

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTradeModelVisibility: isVisible => {
      return dispatch(setTradeModelVisibility(isVisible));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
