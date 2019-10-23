import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.brandi}>DXPWeb Production</Text>
      <Text style={styles.paragraph}>CRIADORES DE SITES DE CLASSE MUNDIAL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AC9E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  brandi: {
    margin: 15,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF45A'
  },
  paragraph: {
    margin: 10,
    fontSize: 10,
    textAlign: 'center',
    color: '#FFF'
  }

});
