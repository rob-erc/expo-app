import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Input, Button, ForgotPass, Footer } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Sign Up</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        fontWeight: 'bold'
    }
});

export const SignUp: React.FC = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28' />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header />
                </View>
                <View style={{ flex: 3, justifyContent: "space-evenly" }}>
                    <Input label="Name"></Input>
                    <Input label="Email"></Input>
                    <Input label="Password"></Input>
                    <ForgotPass title="Already have an account?" onPress={() => navigation.navigate('Login')}/>
                    <Button title="Sign Up" onPress={() => Alert.alert('Sign Up')} />
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end'}}>
                    <Footer  />
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16
    }
})