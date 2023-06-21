import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import DarkSvg from '../assets/dark-signup.svg';
import BlueSvg from '../assets/blue-signup.svg';
import IconBack from '../assets/icons/arrow_back.svg';
import IconForward from '../assets/icons/arrow_forward.svg';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <View style={{...styles.bg}}>
        <DarkSvg
          style={{position: 'absolute', top: -10, left: -200}}
          height={800}
          width={800}
        />
        <BlueSvg
          style={{position: 'absolute', top: 0, left: -250}}
          height={1200}
          width={1200}
        />

        <SafeAreaView>
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: Platform.OS === 'android' ? 20 : 0,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <IconBack height={28} width={28} fill={Colors.white} />
            </TouchableOpacity>
          </View>

          {/* title */}
          <View style={{marginTop: 50, marginHorizontal: 20}}>
            <Text
              style={{fontSize: 38, color: Colors.white, fontWeight: '600'}}>
              Create
            </Text>
            <Text
              style={{fontSize: 38, color: Colors.white, fontWeight: '600'}}>
              Account
            </Text>
          </View>

          {/* form */}
          <View style={{marginTop: 50, marginHorizontal: 20}}>
            <FormField placeHolder="Name" />
            <FormField placeHolder="Email" />
            <FormField placeHolder="Password" />
          </View>

          {/* button */}
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 100,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontWeight: 'bold', color: Colors.white, fontSize: 28}}>
              Sign Up
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('SignUpScreen')}>
              <LinearGradient
                colors={['#232529', '#7f8084']}
                start={{x: 0, y: 0}}
                end={{x: 1.2, y: 0}}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <IconForward height={28} width={28} fill={Colors.white} />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* links */}
          <View
            style={{marginHorizontal: 20, marginTop: 50, flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 18,
                  fontWeight: '600',
                  textDecorationLine: 'underline',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const FormField = ({placeHolder}: any) => {
  return (
    <View
      style={{
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        marginBottom: 20,
      }}>
      <TextInput
        style={{fontSize: 18, color: Colors.white}}
        placeholder={placeHolder}
        placeholderTextColor={Colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default SignUpScreen;
