import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import YellowSvg from '../assets/yellow.svg';
import DarkSvg from '../assets/dark.svg';
import BlueSvg from '../assets/blue.svg';

import IconBack from '../assets/icons/arrow_back.svg';
import IconForward from '../assets/icons/arrow_forward.svg';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const LoginScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />

      <View style={[styles.bg]}>
        <YellowSvg style={{position: 'absolute'}} />
        <DarkSvg
          style={{position: 'absolute', left: -250, top: -50}}
          height={1200}
          width={1200}
        />
        <BlueSvg
          style={{position: 'absolute', left: 40, top: -180}}
          height={900}
          width={900}
        />

        <SafeAreaView style={{flex: 1}}>
          {/* header */}
          <View
            style={{
              marginHorizontal: 20,
              marginTop: Platform.OS === 'android' ? 50 : 0,
            }}>
            <IconBack height={28} width={28} fill={Colors.white} />
          </View>

          {/* welcome */}
          <View style={{marginHorizontal: 20, marginTop: 50}}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 38,
                fontWeight: 'bold',
                maxWidth: 200,
              }}>
              Welcome Back
            </Text>
          </View>

          {/* form */}
          <View style={{marginHorizontal: 20, marginTop: 200}}>
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
              style={{fontWeight: 'bold', color: Colors.dark, fontSize: 20}}>
              Sign In
            </Text>

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
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginBottom: 20,
      }}>
      <TextInput style={{fontSize: 18}} placeholder={placeHolder} />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,
  },
});

export default LoginScreen;
