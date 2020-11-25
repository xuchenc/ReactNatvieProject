/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// Icon.loadFont();
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [text1, text2, setText] = useState('');
  // const icon = <Icon name="menu" size={20} color="green" />;
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>手机快捷登录</Text>
        </View>
        <View style={styles.content}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 20,
            height: 50,
            width: 300,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            }}>
            <Text style={styles.mobileTitle}>+86 > </Text>
            <TextInput
              style={styles.inputBox}
              placeholder="输入手机号"
              placeholderTextColor="gray"
              maxLength={11}
              keyboardType="numeric"
            />
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            height: 50,
            width: 300,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            }}>
            <TextInput
              style={styles.codeBox}
              placeholder="输入验证码"
              placeholderTextColor="gray"
              maxLength={6}
            />
            <Button onPress={() => Alert.alert('验证码已发送')}
              title="获取验证码"
              color="rgb(159, 79, 77)"
            />
          </View>
          <Text style={styles.text1}>未注册则手机验证后自动创建新账号</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.buttonText}>登录</Text>
          </TouchableOpacity>
          <Text style={styles.text2}>账号密码登录</Text>
        </View>
        <View sytle={styles.footer}>
          <View style={styles.iconBox}>
            <Image
              style={styles.wechat}
              source={{uri: 'https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/47821101557996972-512.png',}}
            />
            {/* <Icon name="wechat" size={24} color="red" />
            <Icon name="apple" size={12} color="green" /> */}
            {/* {icon} */}
            {/* <Icon.Button
              name="wechat"
              backgroundColor="#3b5998"
              onPress={this.loginWithFacebook}>
              Login with Facebook
            </Icon.Button> */}
            <Image
              style={styles.wechat}
              source={{uri: 'https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/8138147621556105331-512.png',}}
            />
            <Image
              style={styles.wechat}
              source={{uri: 'https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/7259111131556105345-512.png',}}
            />
            <Image
              style={styles.wechat}
              source={{uri: 'https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/14357284101557997011-512.png',}}
            />
          </View>
          <Text style={styles.text3}>
            登录即代表您已阅读并同意
            <Text style={styles.term}>用户协议</Text>
            <Text style={styles.text3}> 和 </Text>
            <Text style={styles.term}>隐私策略</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.black,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    flex: 0.1,
    marginTop: 150,
    marginLeft: -150,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.white,
  },
  content: {
    flex: 0.8,
    flexDirection: 'column',
    alignItems: 'center',
  },
  mobileTitle: {
    flex: 1,
    width: 50,
    fontSize: 20,
    marginTop: 13,
    color: Colors.white,
  },
  inputBox: {
    flex: 4,
    width: 50,
    height: 50,
    backgroundColor: Colors.balck,
    color: Colors.white,
    fontSize: 20,
  },
  codeBox: {
    flex: 4,
    width: 50,
    height: 50,
    backgroundColor: Colors.balck,
    color: Colors.white,
    fontSize: 20,
  },
  codeTitle: {
    flex: 2,
    width: 500,
    fontSize: 26,
    marginTop: 23,
    color: 'rgb(159, 79, 77)',
  },
  text1: {
    color: 'gray',
    marginTop: 80,
  },
  text2: {
    color: 'rgb(159, 79, 77)',
    marginTop: 30,
    fontSize: 16,
  },
  text3: {
    color: 'gray',
    marginTop: 50,
  },
  term: {
    color: 'gray',
    textDecorationLine: 'underline',
    // marginTop: 30,
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(118, 42, 44)',
    width: 300,
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: 'gray',
    fontSize: 20,
  },
  footer: {
    flex: 0.3,
    // position: 'relative',
    // bottom: 0,
  },
  iconBox: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
  },
  wechat: {
    width: 24,
    height: 24,
  },
  qq: {
    color: 'white',
  },
});

export default App;
