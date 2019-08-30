import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import AlbumList from '../../components/AlbumList';

export default class FeedsTab extends Component {
  onPress = () => {
    this.props.navigation.push('Detail');
  };
  render() {
    return (
      <View onPress={this.onPress} style={{flex: 1}}>
        <AlbumList />
      </View>
    );
  }
}
