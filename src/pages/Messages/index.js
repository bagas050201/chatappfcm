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
import {launchImageLibrary} from 'react-native-image-picker';
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

const ROOT_URL = 'https://simple-chat-app-backend-99.herokuapp.com';

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
    console.log(messages[0]);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );

    axios
      .post(`${ROOT_URL}/api/v1/message/send`, {
        message: messages[0].text,
        sender: TEMP_ID,
      })
      .catch(err => {
        console.log({axiosErr: err});
      });
  }, []);

  // console.log({messages});

  useEffect(() => {
    messaging().subscribeToTopic(DEFAULT_TOPIC);
  }, []);

  const renderActions = useCallback(() => {
    return (
      <BorderlessButton
        onPress={() => {
          launchImageLibrary().then(({assets}) => {
            const {uri, type, fileName} = assets[0];

            setMessages(previousMessages => {
              return GiftedChat.append(previousMessages, {
                _id: makeid(24),
                image: uri,
                user: {
                  _id: TEMP_ID,
                },
                createdAt: new Date(),
              });
            });

            const form = new FormData();
            form.append('image', {uri, type, name: fileName});
            axios({
              method: 'post',
              url: `${ROOT_URL}/api/v1/image/upload`,
              data: form,
              headers: {'content-type': 'multipart/form-data'},
            })
              .then(function (response) {
                axios
                  .post(`${ROOT_URL}/api/v1/message/send`, {
                    image: response.data.result.image_url,
                    sender: TEMP_ID,
                  })
                  .catch(err => {
                    console.log({axiosErr: err});
                  });
                //handle success
                // console.log(response.data.result.image_url);
              })
              .catch(function (response) {
                //handle error
                console.log(response);
              });
          });
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 48,
          height: 48,
        }}>
        <Text style={{fontSize: 32}}>+</Text>
      </BorderlessButton>
    );
  }, []);

  messages.forEach(m => console.log(m));

  return (
    <View style={styles.container}>
      <GiftedChat
        renderActions={renderActions}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: TEMP_ID,
        }}
        alwaysShowSend
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
