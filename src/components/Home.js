import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  Button,
  StyleSheet,
  FlatList,
  Modal,
  TextInput
} from 'react-native';
// import { NavigationActions } from 'react-navigation';


export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Home',
      // headerLeft: {},
      // headerRight: {},
    };
  };

  state = {};

  render() {
    const imgUrl = 'http://www.reactnativeexpress.com/logo.png';

    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>

          <TextInput 
            style={styles.textBox}
            underlineColorAndroid='transparent'
            placeholder='This is a text box.'
            // onChangeText={}
            // value={}
          />

          <Button 
            title='Stack'
            onPress={() => {
              this.props.navigation.navigate(
                'Details',
                {
                  otherParam: 'First',
                },
                // null,
                // 'Details'
              );
            }}
          />

          <Button 
            title='Drawer'
            onPress={ () => this.props.navigation.navigate('Notification') }
          />

          <Button 
            title='To Do'
            onPress={ () => this.props.navigation.navigate('ToDo') }
          />

          <View style={styles.boxPic}>
            <Image
              style={styles.image}
              source={{uri: imgUrl}}
            />
          </View>

          <Button onPress={() => this.props.navigation.navigate('Modal')} title='Press Me, Yow' />

          <ActivityIndicator size='large' color='#0f0' />

          <ScrollView horizontal style={styles.sidescroll}>
            <Image
              style={styles.image}
              source={{uri: imgUrl}}
            />
            <Image
              style={styles.image}
              source={{uri: imgUrl}}
            />
            <Image
              style={styles.image}
              source={{uri: imgUrl}}
            />
            <Image
              style={styles.image}
              source={{uri: imgUrl}}
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
    alignItems: 'stretch',
  },
  textBox: {
    // borderWidth: 1,
    // borderColor: 'gray',
    // borderRadius: 5,
    padding: 15,
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