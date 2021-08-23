import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import dictionary from './localdb';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

var word = dictionary["text"]["word"]
var lexicalCategory = dictionary[text]["lexicalcategory"]
var definition = dictionary[text]["definition"]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

this.setState({
  "word": word,
  "lexicalCategory": lexicalCategory,
  "definition": definition,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
