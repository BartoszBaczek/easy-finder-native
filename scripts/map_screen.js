import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet } from 'react-native';

export default class MapScreen extends Component {
  constructor(props){
    super(props);
    this.lang = require('../langs/ENG.json');
  }

  render() {
      return (
        <View style={styles.container}>
          <Text> Screen with a map </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});
