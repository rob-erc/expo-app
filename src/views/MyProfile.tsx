import React from 'react';
import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>My Profile</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 35,
        color: '#F7F7F7',
        fontWeight: 'bold',
        textAlign: 'left',
        marginHorizontal: 15,
        marginTop: 50,
        marginBottom: 20,
    }
});

interface Props {
    text: string;
    boldText: string;
}

const AccountAction: React.FC<Props> = ({ text, boldText}) => {
    return (
        <TouchableOpacity style={accActionStyle.button}>
            <View style={{ flex: 5, alignSelf: 'flex-start'}}>
                <Text style={{ color: '#F5F5F5', fontWeight: 'bold', fontSize: 18}}>
                    {boldText}
                </Text>
                <Text style={{ color: '#ABB4BD'}}>
                    {text}
                </Text>
            </View>
            <View style={{ alignSelf: 'flex-end'}}>
                <MaterialCommunityIcons name="chevron-right" size={24} color="#F5F5F5" />
            </View>
            
        </TouchableOpacity>
    )
}

const accActionStyle = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 20
    }
})

export const MyProfile: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28' />
            <View style={style.header}>
                <Header />
                <View style={style.info}>
                    <Image source={require('./img/profile-image.png')} style={style.image} />
                    <View style={{ marginLeft: 15}}>
                        <Text style={style.bold}>
                            Matilda Brown
                        </Text>
                        <Text style={{ color: '#F5F5F5', fontSize: 11}}>
                            matildabrown@mail.com
                        </Text>
                    </View>
                </View>
            </View>
            <View style={style.buttonContainer}>
                    <AccountAction boldText="My orders" text="Already have 12 orders" />
                    <AccountAction boldText="Payment methods" text="Visa **34" />
                    <AccountAction boldText="Promocodes" text="You have special promocodes" />
                    <AccountAction boldText="My reviews" text="Reviews for 4 items" />
                    <AccountAction boldText="Settings" text="Notifications, password" />
            </View>
            
        </>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    header: {
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
        paddingBottom: 40,
        flex: 2
    },
    image: {
        borderRadius: 150 / 2,
        overflow: "hidden",
    },
    info: {
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    bold: {
        color: '#F5F5F5',
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: '#1E1F28',
        flex: 6,
    }

})