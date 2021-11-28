/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Messages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ini adalah halaman Messages.</Text>

        <Button
          title="Ke Halaman Listchat"
          onPress={() =>
            this.props.navigation.navigate('Listchat')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Messages;
