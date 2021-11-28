/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* eslint-disable prettier/prettier */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
//mode 1
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/config/router';
//mode 2
import { createStackNavigator } from '@react-navigation/stack';
import { Listchat,Messages } from './src/pages';

const App: () => Node = () => {
  //punya fcm
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  useEffect(() => {
    //digunakan oleh fcm
    requestUserPermission();
    //alert saat notification muncul dimana user lgi di app
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  //punya fcm
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
      console.log('Authorization status:', authStatus);
    }
  };

  //punya fcm
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      console.log("' Your Firebase Token is: ", fcmToken);
    } else {
      console.log("'Failed", "'No token received");
    }
  };

  //handler mode 2
  const Stack = createStackNavigator();
  return (
    /** Mode 1
     * <NavigationContainer>
        <Router />
      </NavigationContainer> */
    // Mode 2
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Listchat"
            component={Listchat}
          />
          <Stack.Screen
            name="Messages"
            component={Messages}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
