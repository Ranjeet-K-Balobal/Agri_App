// FormPage.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FormPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an option:</Text>
      <Button
        title="Upload PDF"
      />
      <Button
        title="Fill Text Boxes"
       
      />
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

export default FormPage;
