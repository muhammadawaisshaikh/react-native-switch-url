/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  state = {
    endpoint: 'http://test.sample.com'
  }

  envUsage = (environment) => {
    if (environment == 'testing') {
      this.setState({ endpoint: 'http://test.sample.com' })
    } 
    else if (environment == 'production') {
      this.setState({ endpoint: 'http://production.sample.com' })
    }
  }

  render() {
    return (
      <View style={{paddingTop: 25}}>

        <Text style={styles.Text}> {this.state.endpoint} </Text>
        <Button style={styles.Button} name="production" title="Use Production" onPress={() => this.envUsage('production')} />
        <Button style={styles.Button} name="testing" title="Use Testing" onPress={() => this.envUsage('testing')} />

      </View>
    )
  }
};

const styles = StyleSheet.create({
  Text: {
    backgroundColor: Colors.lighter,
    padding: 20
  },
  Button: {
    marginBottom: 20
  }
});
