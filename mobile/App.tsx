import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Alo devsuperior</Text>
      <Text>Thaylor</Text>
      <Text>Programador React Native</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#069',
    flex: 1,
    justifyContent: 'center',
  },
  h1: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",

  }
})

export default App;