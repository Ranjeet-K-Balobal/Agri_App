// TextBoxForm.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TextBoxForm = ({ navigation }) => {
  const [userData, setUserData] = useState({
    // Define user data fields here
  });

  const handleGenerateReport = () => {
    // Implement logic to send user data to backend and generate report
  };

  return (
    <View style={styles.container}>
      {/* Add text inputs for user details */}
      <Button title="Generate Report" onPress={()=>navigation.navigate("ResultPage")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TextBoxForm;
