import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    }
    const handleSignUp = () => {
        navigation.navigate("SIGNUP")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper}
                onPress={handleGoBack}>
                <Ionicons name={"arrow-back-outline"}
                    color={colors.primary}
                    size={25} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hey</Text>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.headingText}>Back</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name={"mail-outline"} size={30}
                        color={colors.secondary} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your email"
                        placeholderTextColor={colors.secondary}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={"lock"} size={30}
                        color={colors.secondary} />
                    <TextInput style={styles.textInput}
                        placeholder="Enter your password"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() => {
                        setSecureEntry((prev) => !prev)
                    }}>
                        <SimpleLineIcons name={"eye"} size={20}
                            color={colors.secondary} />

                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgetPasswordText}>
                        Forget Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>
                    or continue with
                </Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source={require("../assets/google.png")} style={styles.googleImage} />
                    <Text style={styles.googleText}>
                        Google
                    </Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}> Don't have an account?  </Text>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.signupText}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.gray,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: fonts.SemiBold,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        marginVertical: 10
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
    },
    forgetPasswordText: {
        textAlign: "right",
        color: colors.primary,
        fontFamily: fonts.SemiBold,
        marginVertical: 10,
    },
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        marginTop: 20
    },
    loginText: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.SemiBold,
        textAlign: "center",
        padding: 10,
    },
    continueText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 14,
        fontFamily: fonts.Regular,
        color: colors.primary,
    },
    googleButtonContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 10
    },
    googleImage: {
        height: 20,
        width: 20,
    },
    googleText: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 2
    },
    accountText: {
        color: colors.primary,
        fontFamily: fonts.Regular,
    },
    signupText: {
        color: colors.primary,
        fontFamily: fonts.Bold,
    }
});