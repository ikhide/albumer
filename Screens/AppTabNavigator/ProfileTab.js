import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class ProfileTab extends Component {
  onPress = () => {
    this.props.navigation.push('Detail');
  };
  render() {
    return (
      <View
        onPress={this.onPress}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title="Go to Detail" onPress={this.onPress} />
      </View>
    );
  }
}
