import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Input, Button, ForgotPass, Footer } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Login</Text>
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

export const Login: React.FC = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28' />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header />
                </View>
                <View style={{ flex: 3, justifyContent: "space-evenly" }}>
                    <Input label="Email"></Input>
                    <Input label="Password"></Input>
                    <ForgotPass title="Forgot your password?" onPress={() => navigation.navigate('ForgotPassword')}/>
                    <Button title="Login" onPress={() => Alert.alert('Login')} />
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