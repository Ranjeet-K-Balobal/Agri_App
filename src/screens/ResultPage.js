// ResultPage.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultPage = ({ route }) => {
  // const { recommendation } = route.params; // Receive recommendation from navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crop Recommendation</Text>
      {/* <Text>{recommendation}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ResultPage;
