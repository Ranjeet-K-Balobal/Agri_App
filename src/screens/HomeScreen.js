// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grow Guide</Text>
      <Text style={styles.description}>
      Welcome to Grow Guide – Your Farming Advisor!
      </Text>
      <Text style={styles.description}>
      Elevate your farming experience with Grow Guide,the app designed for farmers, by Team of students from Sahaydri.
      </Text>
      <Text style={styles.description}>
      Input your soil details, receive a quick report, and get actionable insights to optimize your crop yields.
      </Text>
      <Text style={styles.description}> Farm smarter with Grow Guide! 🌱📲 #FarmingMadeEasy #GrowGuideApp</Text>
      <TouchableHighlight
        style={styles.buttonStyles}
        onPress={() => navigation.navigate('FormPage')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableHighlight>
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
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 86,
  },
  description: {
    textAlign: 'center',
    fontSize:18,
    marginBottom: 24,
  },
  buttonStyles:{
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'light',
  }
});

export default HomeScreen;
