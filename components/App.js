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
  Modal,
  TextInput
} from 'react-native';
import { 
  StackNavigator, 
  DrawerNavigator 
} from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Home',
      // headerLeft: {},
      // headerRight: {},
    };
  };

  state = {
    modalVisible: false,
    imgUrl: 'http://www.reactnativeexpress.com/logo.png',
  };

  render() {
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
            onPress={() => {
              this.props.navigation.navigate('Notification');
            }}
          />

          <View style={styles.boxPic}>
            <Image
              style={styles.image}
              source={{uri: this.state.imgUrl}}
            />
          </View>

          <Button onPress={() => this.props.navigation.navigate('Modal')} title='Press Me, Yow' />

          <ActivityIndicator size='large' color='#0f0' />

          <ScrollView horizontal style={styles.sidescroll}>
            <Image
              style={styles.image}
              source={{uri: this.state.imgUrl}}
            />
            <Image
              style={styles.image}
              source={{uri: this.state.imgUrl}}
            />
            <Image
              style={styles.image}
              source={{uri: this.state.imgUrl}}
            />
            <Image
              style={styles.image}
              source={{uri: this.state.imgUrl}}
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

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'This is nested',
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button 
          title='More stack'
          onPress={() => { this.props.navigation.navigate('Details', {
            otherParam: 'Next',
          });
        }}
          />
        <Button 
          title='Back'
          onPress={() => this.props.navigation.goBack()}
        />
        {/* <Button 
          title='Home'
          onPress={() => this.props.navigation.goBack('Details')}
        /> */}
      </View>
    );
  }
}

class NotificationScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'stretch'}}>
        <Button 
          title='Main'
          onPress={() => this.props.navigation.navigate('Main')}
        />
        <Button 
          title='Draw more'
          onPress={() => this.props.navigation.navigate('Notification')}
        />
      </View>
    );
  }
}

class ModalScreen extends Component {
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

const SubStack = DrawerNavigator({
  Notifications: {
    screen: NotificationScreen,
  },
});

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: ModalScreen,
    },
    Notification: {
      screen: SubStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

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

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

// AppRegistry.registerComponent('App', () => App)