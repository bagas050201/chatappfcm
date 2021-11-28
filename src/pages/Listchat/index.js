/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Listchat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>halaman Listchat.</Text>

        <Button
          title="Ke Halaman Messages"
          onPress={() =>
            this.props.navigation.navigate('Messages')
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
export default Listchat;
