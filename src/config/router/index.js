/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Listchat,Messages } from '../../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{title: 'Listchat',header: () => null,}} name='Listchat' component={Listchat} />
        <Stack.Screen options={{title: 'Messages',header: () => null,}} name='Messages' component={Messages} />
      </Stack.Navigator>
  );
};

export default Router;
