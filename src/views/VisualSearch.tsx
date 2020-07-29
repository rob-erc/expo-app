import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert } from 'react-native';
import { Input, Button } from '../components';

export const VisualSearch: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28' />
            <View style={style.container}>
                <Text style={style.text}>Finding similar results...</Text>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "#F5F5F5",
        fontSize: 36,
        fontWeight: 'bold',
        marginHorizontal: 20,
        textAlign: 'center'
    }
})