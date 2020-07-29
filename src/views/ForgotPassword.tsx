import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Input, Button } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Forgot password</Text>
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

export const ForgotPassword: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28' />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header />
                </View>
                <View style={{ flex: 3, justifyContent: "space-evenly" }}>
                    <View>
                        <Text style={style.text}>
                            Please, enter your email address. You will recieve a link to create a new password via email.
                        </Text>
                        <Input label="Email"></Input>
                    </View>
                    <Button title="Send" onPress={() => Alert.alert('Send')} />
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end' }}></View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16
    },
    text: {
        color: "#F5F5F5",
        marginVertical: 15
    }
})