import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, TextInput, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { Input, Button, ForgotPass, Footer } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>My Bag</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 40,
        color: '#F7F7F7',
        fontWeight: 'bold',
        textAlign: 'left',
        marginHorizontal: 15,
        marginTop: 50,
        marginBottom: 20,
    }
});

const BagItem: React.FC = () => {
    return (
        <TouchableOpacity style={bagItemStyle.categorie}>
            <ImageBackground source={require('./img/bag-item.png')} style={bagItemStyle.pic} resizeMode={"contain"}/>
            <View style={bagItemStyle.text}>
                <Text style={{color: '#F5F5F5', fontSize: 15, fontWeight: 'bold'}}>
                    Shirt
                </Text>
                <Text style={{color: 'white', fontSize: 10}}>
                    Color: Black    Size: L
                </Text>
            </View>
            <View style={bagItemStyle.price}>
                <Text style={{ color: 'white' }}>
                    Price
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const bagItemStyle = StyleSheet.create({
    categorie: {
        backgroundColor: '#2A2C36',
        borderRadius: 10,
        marginVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100
    },
    text: {
        flex: 2,
        paddingLeft: 20,
        fontSize: 15,
        fontWeight: 'bold',
    },
    pic: {
        flex: 2,
    },
    price: {
        flex: 2,
        color: '#F5F5F5',
    },
    parameters: {

    }
})

interface PromoProps {
    label: string,
    focused?: boolean
};

const PromoInput: React.FC<PromoProps> = ({ label, focused = false}) => {
    return (
        <View style={promoStyle.container}>
            <TextInput
                style={promoStyle.text} 
                placeholderTextColor="#ABB4BD"
                placeholder={label}
            />
        </View>
    )
}

const promoStyle = StyleSheet.create({
    container: {
        backgroundColor: '#2A2C36',
        borderRadius: 10,
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 8,
        textAlignVertical: 'top'
    },
    label: {
        paddingTop: 12,
        paddingLeft: 20,
        color: '#ABB4BD'
    }
})

export const MyBag: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28' />
            <View style={style.header}>
                <Header />
            </View>
            <ScrollView style={style.container}>
                <BagItem />
                <BagItem />
                <BagItem />

                <View style={style.checkout}>
                    <PromoInput label="Enter your promo code" />
                    <View style={style.amount}>
                        <Text style={{ color: '#F5F5F5', flex: 3}}>
                            Total amount:
                        </Text>
                        <Text style={{ color: 'white', flex: 3, textAlign: 'right'}}>
                            Price
                        </Text>
                    </View>
                    <Button title="CHECK OUT" onPress={() => Alert.alert('Checkout')} ></Button>
                </View>
            </ScrollView>
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
    },
    checkout: {
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        marginVertical: 20
    },
    amount: {
        marginVertical: 40,
        flexDirection: 'row'
    }
})