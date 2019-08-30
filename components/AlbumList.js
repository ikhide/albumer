import React, {PureComponent} from 'react';
import {Text, View, ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends PureComponent {
  state = {
    album: [],
  };
  UNSAFE_componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({album: response.data}));
  }

  renderAlbums() {
    return this.state.album.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  render() {
    console.log(this.state);
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
