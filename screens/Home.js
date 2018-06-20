import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import Image from './Image';

class StartScreen extends Component {
  constructor(props) {
    super(props)

    this.onPress = this.onPress.bind(this);
  }

  onPress(title) {
    this.props.navigation.navigate(title);
  }

  render() {
    return(
      <View style={ styles.container }>
        <Button title="Regular Image" onPress={ (e) => this.onPress("Image") }/>
        <Button title="Greyscale Image" onPress={ (e) => this.onPress("GreyImage") }/>
        <Button title="Blurred Image" onPress={ (e) => this.onPress("BlurredImage") }/>
      </View>
    )
  }
}

StartScreen.navigationOptions = {
  title: 'Start',
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

export default StartScreen
