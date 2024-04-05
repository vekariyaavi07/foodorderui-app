/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import {Image, StyleSheet} from 'react-native';
import React from 'react';

import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="HomeBottom"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../images/cutlery.png')}
              resizeMode="contain"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#eb5a0c' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../images/search.png')}
              resizeMode="contain"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#eb5a0c' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../images/like.png')}
              resizeMode="contain"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#eb5a0c' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../images/profile.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#eb5a0c' : 'black',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
