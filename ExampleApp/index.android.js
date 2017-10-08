/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';

export default class ExampleApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TouchableHighlight onPress={async () => {
          GoogleSignIn.hasPlayServices({autoResolve: true}).then((succ)=>{
            console.log("Play services available",succ);
          }).catch((err)=>{
            console.log(err);
          });

          await GoogleSignIn.configure({
            serverClientID: '737956827869-k8q0nnllvqueiuikjpf2rcg2aver7rho.apps.googleusercontent.com',
            scopes: ['openid', 'email', 'profile'],
            shouldFetchBasicProfile: true,
            offlineAccess: true
          }).then(function(response) {
            console.log(response);
          }).catch(function(error){
            console.log(error);
          });

          GoogleSignIn.signInPromise().then((result)=>{
            console.log("some result from sign in",result);
          }).catch((err)=>{
            console.log("something went wrong with sing in",err);
          });
        }}>
          <Text style={styles.instructions}>
            Google Sign-In
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ExampleApp', () => ExampleApp);
