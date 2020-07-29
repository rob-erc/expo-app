import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Input, Button, ForgotPass, Footer } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Success!</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export const Success: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28' />
            <ScrollView contentContainerStyle={style.container}>
                <View style={style.message}>
                    <View style={{ flex: 3 }}>
                        <Text style={style.picture} >Picture</Text>
                    </View>
                    <View style={{ flex: 2 }} >
                        <Header/>
                        <Text style={style.text}>
                            Your order will be deivered soon.{"\n"} Thank you for choosing our app!
                        </Text>
                    </View>
                </View>
                
                <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                    <Button title="CONTINUE SHOPPING" onPress={() => Alert.alert('Login')} />
                </View>
                
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    message: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginHorizontal: 30,
        color: '#F7F7F7',
        textAlign: 'center',
        marginVertical: 10
    },
    picture: {
        color: '#F7F7F7',
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'red'
    }
})