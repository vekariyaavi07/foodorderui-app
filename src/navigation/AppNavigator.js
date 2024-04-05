import {} from 'react-native';
import React from 'react';

import Restaurant from '../screens/Restaurant';
import Order from '../screens/Order';
import Tab from '../navigation/Tabs';
import Splash from '../screens/Splash';

import {createStackNavigator} from '@react-navigation/stack';

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Tab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
