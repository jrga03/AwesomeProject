import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
// import { NavigationActions } from 'react-navigation';

export default class ModalScreen extends Component {
  render() {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <Text style={{color: 'white', fontSize: 48, textAlign: 'center',}}>Yo, yo, you pressed me!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Don't Press Me"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
})