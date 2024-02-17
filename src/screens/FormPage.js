// FormPage.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable,TextInput,ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import * as DocumentPicker from 'expo-document-picker';

// const selectDoc = async () => {
   
//     try{
//         const doc = await DocumentPicker.pick();
//         console.log("Doc:",doc)
//     }
//     catch(err){
//         if(DocumentPicker.isCancel(err)){
//             console.log("User canceled the upload",err)
//         }
//         else{
//             console.log(err)
//         }
//     }

// }

_pickDocument = async () => {

  let result = await DocumentPicker.getDocumentAsync({});
  
  alert(result.uri);
  
  console.log(result);
  
  }


const FormPage = ({ navigation }) => {
  const[nitroval, setNitroVal] = useState('');
  const[phosval, setPhosVal] = useState('');
  const[potasval,setPotasVal] = useState('');
  const[pHval,setPHVal] = useState('');
  const[tempval,setTempVal] = useState('');
  const[humval,setHumVal] = useState('');
  const[rainval,setRainVal] = useState('');

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Upload Document :</Text>
      <Pressable style={styles.DocButton}onPress={this._pickDocument}>
        <Text style={styles.buttonText}>Select Doc</Text>
      </Pressable>
      <Text style={styles.divider}>- - - - - - - - - - - - - - - - - -  OR  - - - - - - - - - - - - - - - - -  </Text>
      <Text style={styles.title}>Enter Manually : </Text>
      <View style={styles.inputboxes}>
        <Text style={styles.refinput}>Nitrogen value</Text>
      <TextInput 
      style={styles.input} 
      placeholder='e.g :70, 95, 85'
      keyboardType='numeric'
      onChangeText={(val) => setNitroVal(val)}
      ></TextInput>
       <Text style={styles.refinput}>Phosphorus</Text>
      <TextInput 
      style={styles.input} 
      placeholder='e.g :80, 90, 99'
      keyboardType='numeric'
      onChangeText={(val) => setPhosVal(val)}
      ></TextInput>
       <Text style={styles.refinput}>Potassium value</Text>
      <TextInput 
      style={styles.input} 
      placeholder='e.g :90, 95, 97'
      keyboardType='numeric'
      onChangeText={(val) => setPotasVal(val)}
      ></TextInput>
       <Text style={styles.refinput}>pH value</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Include decimal valules'
      keyboardType='numeric'
      onChangeText={(val) => setPHVal(val)}
      ></TextInput>
       <Text style={styles.refinput}>Temperature (C)</Text>
      <TextInput 
      style={styles.input} 
      placeholder='e.g : 25, 30, 38'
      keyboardType='numeric'
      onChangeText={(val) => setTempVal(val)}
      ></TextInput>
       <Text style={styles.refinput}>Humidty</Text>
      <TextInput 
      style={styles.input} 
      placeholder='e.g : 82.0027'
      keyboardType='numeric'
      onChangeText={(val) => setHumVal(val)}
      ></TextInput>
       <Text style={styles.refinput}>Rainfall (cm) </Text>
      <TextInput 
      style={styles.input} 
      placeholder='e.g :202.936'
      keyboardType='numeric'
      onChangeText={(val) => setRainVal(val)}
      ></TextInput>
      </View>
      <Pressable style={styles.DocButton}onPress={()=>navigation.navigate('ResultPage')} >
        <Text style={styles.buttonText}>Generate Report</Text>
      </Pressable>
    </View>
    </ScrollView> 

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
    marginBottom:50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'right',
  },
  DocButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'black',
    marginTop:15,
   
  },
  buttonText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

  },
  divider:{
    fontSize:15,
    lineHeight:90,
    color:'grey',
    fontWeight:'500',
  },
  input:{
    width:200,
    height:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:6,
    padding:10,
    marginBottom:15,
  },
  inputboxes:{
    justifyContent:'space-between',

  },
  refinput:{
    paddingBottom:10,
    fontSize:15,
  }
});

export default FormPage;
