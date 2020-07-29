import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native'



export const Footer: React.FC = () => {
    return (
        <>
            <Text style={style.title}>Or sign up with social account</Text>
            <View style={style.container} >
                <TouchableOpacity style={style.social} >
                    <Image source={require('./img/google.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={style.social} >
                    <Image source={require('./img/faceboook.png')} />
                </TouchableOpacity>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 120,
        justifyContent: "center",
    },
    social: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        borderRadius: 25,
        maxWidth: 90,
        maxHeight: 60,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
    },
})