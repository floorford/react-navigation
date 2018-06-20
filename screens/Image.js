import React from 'react';

import { StyleSheet, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

// ************* Image stuff ***************

const source = {
  uri: 'https://picsum.photos/400/600/?random'
};

const source2 = {
  uri: 'https://picsum.photos/g/400/600/?random'
};

const source3 = {
  uri: 'https://picsum.photos/400/600/?random&blur'
};

const style = {
  height: 300,
  width: 200,
  marginVertical: 10,
  justifyContent: 'center'
};


// ************* Reg Image Screen Stuff ***************
export const ImageScreen = () => (
  <View style={ styles.container }>
    <Image source={ source } style={ style }/>
  </View>
)

ImageScreen.navigationOptions = {
  title: 'Regular Image',
  headerRight: (
    <TouchableOpacity>
      <Ionicons name="ios-paw" size={26} color="white" />
    </TouchableOpacity>
  ),
}

// ************* Grey Image Screen Stuff ***************
export const GreyImageScreen = () => (
  <View style={ styles.container }>
    <Image source={ source2 } style={ style }/>
  </View>
)

GreyImageScreen.navigationOptions = {
  title: 'Greyscale Image',
}

// ************* Blurred Image Screen Stuff ***************
export const BlurredImageScreen = () => (
  <View style={ styles.container }>
    <Image source={ source3 } style={ style }/>
  </View>
)

BlurredImageScreen.navigationOptions = {
  title: 'Blurred Image',
}

// *********** Styles ***************
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
