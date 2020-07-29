import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Button: React.FC = () => {
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <LinearGradient
                colors={['#EF3651', 'white']}
                start={{ x: 0, y: 0.25}}
                end={{ x: 0, y: 0}}
                style={buttonStyle.container}>
                <Text style={{
                        backgroundColor: 'transparent',
                        fontSize: 15,
                        color: '#fff',
                    }}>
                    <Text style={buttonStyle.text}>Check</Text>
          </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const buttonStyle = StyleSheet.create({
    container: {
        backgroundColor: "#EF3651",
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 10,
        width: '45%',
        marginVertical: 20,
        marginLeft: 20,
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
        paddingVertical: 15,
    }
})

export const MainPage: React.FC = () => {
    return (
        <>
            <ImageBackground source={require('./img/main-background.png')} style={style.picture}>
                <View style={style.pictureContent}>
                    <Text style={style.h1}>
                        Fashion {"\n"}Sale
                    </Text>
                    <Button></Button>
                </View>
            </ImageBackground>
            <ScrollView style={style.container}>
                <View style={style.new}>
                    <Text style={style.h2}>
                        New
                    </Text>
                    <Text style={style.text}>
                        You`ve never seen it before!
                    </Text>
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
        flexDirection: 'column',

    },
    h1: {
        color: '#F5F5F5',
        paddingLeft: 20,
        fontSize: 50,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 30,
        color: '#F5F5F5',
        marginTop: 25,
        fontWeight: 'bold',
    },
    picture: {
        flex: 3,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    new: {
        flex: 2,
        
    },
    pictureContent: {
        marginBottom: 20
    },
    text: {
        color: '#ABB4BD',
    }
})