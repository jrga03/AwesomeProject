import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  Button,
  StyleSheet,
  FlatList,
  Modal
} from 'react-native';

export default class App extends Component {

  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible: true});
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text style={{color: 'white', fontSize: 48, textAlign: 'center',}}>Yo, yo, you pressed me!</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Don't Press Me"
                />
              </View>
            </View>
          </Modal>
          <View style={styles.boxPic}>
            <Image
              style={styles.image}
              source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
            />
          </View>
          <Button onPress={() => this.openModal()} title='Press Me, Yo' />
          <ActivityIndicator size='large' color='#0f0' />
          <ScrollView horizontal style={styles.sidescroll}>
            <Image
              style={styles.image}
              source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
            />
            <Image
              style={styles.image}
              source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
            />
            <Image
              style={styles.image}
              source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
            />
            <Image
              style={styles.image}
              source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
            />
          </ScrollView>
          <View style={styles.box} />
          <View>
            <Text style={styles.text}>Heyyyyyyyy</Text>
          </View>
          <View style={styles.flat}>
            <FlatList
              data={[
                {key: 'The'}, 
                {key: 'quick'},
                {key: 'brown'},
                {key: 'fox'},
                {key: 'jumps'},
                {key: 'over'},
                {key: 'the'},
                {key: 'lazy'},
                {key: 'dog'},
              ]} 
              renderItem={({item}) => <Text style={{fontSize: 24}}>{item.key}</Text>}
            />
          </View>
        </View>
      </ScrollView>
      // <View style={styles.container}>
      //   <View style={styles.box} />
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
  text: {
    fontSize: 64,
    color: '#4a90e2',
    padding: 50,
    backgroundColor: 'whitesmoke',
  },
  image: {
    width: 300,
    height: 300,
    // margin: 10,
  },
  boxPic: {
    width: 400,
    height: 400,
    borderWidth: 3,
    borderColor: 'steelblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sidescroll: {
    // height: 600,
  },
  flat: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 50,
  },
  flatlisttext: {
    fontSize: 24,
  },
})

AppRegistry.registerComponent('App', () => App)