import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class MainScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerLeft: <Icon name="ios-camera" style={{paddingLeft: 10}} />,
    title: 'Instagram',
    headerRight: <Icon name="ios-send" style={{paddingRight: 10}} />,
  };
  render() {
    return <Text></Text>;
  }
}
