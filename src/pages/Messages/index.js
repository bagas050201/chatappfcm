import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  FlatList,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GiftedChat} from 'react-native-gifted-chat';
import axios from 'axios';

import messaging from '@react-native-firebase/messaging';
import {BorderlessButton} from 'react-native-gesture-handler';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const DEFAULT_TOPIC = 'default';

const ROOT_URL = 'http://8bae-125-160-135-236.ngrok.io';

function makeid(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const TEMP_ID = makeid(16);

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(
    () =>
      messaging().onMessage(async remoteMessage => {
        console.log(`got message from : ${remoteMessage.data.sender}`);
        if (remoteMessage.data.sender !== TEMP_ID) {
          setMessages(previousMessages => {
            return GiftedChat.append(previousMessages, {
              _id: remoteMessage.messageId,
              text: remoteMessage.data.message,
              image: remoteMessage.data.image,
              user: {
                id: 'other',
                name: 'Anon',
              },
              createdAt: new Date(),
            });
          });
        }

        // console.log({
        //   message: remoteMessage.data.message,
        //   id: remoteMessage.messageId,
        // });
      }),
    [messages, setMessages],
  );

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );

    axios.post(`${ROOT_URL}/api/v1/message/send`, {
      message: messages[0].text,
      sender: TEMP_ID,
    });
  }, []);

  // console.log({messages});

  useEffect(() => {
    messaging().subscribeToTopic(DEFAULT_TOPIC);
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: TEMP_ID,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Messages;
