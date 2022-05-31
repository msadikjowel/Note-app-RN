import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const genderOptions = ['Male', 'Female'];

const SignUp = ({ navigation }) => {

    const [gender, setGender] = useState();

    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView> */}

            <View style={styles.inputContainer}>
                <Input
                    placeholder='Full name'
                />
                <Input
                    placeholder='Age'
                />
                <Input
                    placeholder='Email'
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                />
                <View>
                    <Text style={{ marginVertical: 20 }}>Select gender:</Text>
                </View>

                {
                    genderOptions.map((option) => {
                        const selected = option === gender;
                        return (
                            <Pressable
                                onPress={() => setGender(option)}
                                key={option}
                                style={styles.radionContainer}>
                                <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                                    <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]} />
                                </View>
                                <Text style={styles.radioText}>{option}</Text>
                            </Pressable>
                        );
                    })
                }



            </View>

            <Button title="Sign up" customStyles={{ alignSelf: 'center', marginTop: 40 }} />

            <View style={styles.bottomContent}>


                <Pressable onPress={() => { navigation.navigate('Signin') }}>
                    <Text>Already have an account? <Text style={{ color: 'green', fontWeight: 'bold' }}>Sign in</Text></Text>
                </Pressable>
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingHorizontal: 16,
        marginVertical: 25
    },
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
    radionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    outerCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#CFCFCF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: "#CFCFCF",
    },
    radioText: {
        marginLeft: 10,
    },

    selectedOuterCircle: {
        borderColor: 'orange'
    },
    selectedInnerCircle: {
        backgroundColor: 'orange',
        borderColor: 'orange'
    }

})
