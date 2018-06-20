import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <View>
      <TouchableHighlight style={ styles.button } onPress={ onPress } underlayColor='#1B5E20'>
        <Text style={ styles.buttonText }>
           View { title }
        </Text>
      </TouchableHighlight>
    </View>
  )
}

// *********** Styles ***************
const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: '#388E3C',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Button;
