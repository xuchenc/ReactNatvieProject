import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    // flex: 1,
    width: 250,
    height: 50,
    backgroundColor: Colors.light,
    color: Colors.black,
    fontSize: 20,
  },
});

const InfoScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>1 more step!</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="姓名"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="年龄"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="地址"
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoScreen;
