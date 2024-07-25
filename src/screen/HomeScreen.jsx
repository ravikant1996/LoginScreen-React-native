import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Suspense } from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation= useNavigation();
  const handleLogin= ()=>{
    navigation.navigate("LOGIN")
  }
  const handleSignUp= ()=>{
    navigation.navigate("SIGNUP")
  }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Image source={require("../assets/frame.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Welcome to the App</Text>
      <Text style={styles.subtitle}>This app is used for login and signup</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style= {[styles.lognButtonWrapper,
           {backgroundColor: colors.primary}]}
           onPress={handleLogin}
           >
          <Text style={styles.lognButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.lognButtonWrapper]}
        onPress={handleSignUp}> 
          <Text style={styles.signButtonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  logo: {
    height: 50,
    width: 140,
    marginVertical: 30
  },
  bannerImage: {
    height: 250,
    width: 231,
    marginVertical: 20
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.Bold,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.primary,
    marginTop: 40
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.secondary,
    marginVertical: 50
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 60,
    borderWidth: 2,
    borderColor: colors.primary,
    width: "80%",
    height: 60,
    borderRadius: 100
  },
  lognButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 90
  },
  lognButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold
  },
  signButtonText:{
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold
  }

});