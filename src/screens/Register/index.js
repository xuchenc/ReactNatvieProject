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

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Register Screen!!!</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="输入手机号"
        placeholderTextColor="gray"
        maxLength={11}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="输入验证码"
        placeholderTextColor="gray"
        maxLength={6}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Info')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
