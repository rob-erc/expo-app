import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert, TouchableOpacity } from 'react-native';
import { Input, Button, ForgotPass, Footer } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Categories</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 24,
        lineHeight: 34,
        color: '#F7F7F7',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

const Group: React.FC = () => {
    return (
        <View style={groupStyle.container}>
            <TouchableOpacity style={groupStyle.button}>
                <Text style={groupStyle.text}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity style={groupStyle.button}>
                <Text style={groupStyle.text}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity style={groupStyle.button}>
                <Text style={groupStyle.text}>Kids</Text>
            </TouchableOpacity>
        </View>
    )
};

const groupStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 15,
    },
    button: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: '#F7F7F7'
    }
})

const Sale: React.FC = () => {
    return (
        <TouchableOpacity style={saleStyle.container} >
            <Text style={saleStyle.title}>SUMMER SALES</Text>
            <Text style={saleStyle.text}>Up to 50% off</Text>
        </TouchableOpacity>
    );
}

const saleStyle = StyleSheet.create({
    container: {
        backgroundColor: "#EF3651",
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 35,
        marginBottom: 7
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
    },
    title: {
        color: '#F5F5F5',
        fontSize: 25,
        fontWeight: 'bold',
        lineHeight: 25,

    }
})

const NavBar: React.FC = () => {
    return (
        <View style={navBarStyle.bar}>
            <TouchableOpacity style={navBarStyle.button}>
                <Text style={navBarStyle.pic}>

                </Text>
                <Text style={navBarStyle.text}>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={navBarStyle.button}>
                <Text style={navBarStyle.pic}>

                </Text>
                <Text style={navBarStyle.text}>
                    Shop
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={navBarStyle.button}>
                <Text style={navBarStyle.pic}>

                </Text>
                <Text style={navBarStyle.text}>
                    Bag
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={navBarStyle.button}>
                <Text style={navBarStyle.pic}>

                </Text>
                <Text style={navBarStyle.text}>
                    Favourites
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={navBarStyle.button}>
                <Text style={navBarStyle.pic}>

                </Text>
                <Text style={navBarStyle.text}>
                    Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const navBarStyle = StyleSheet.create({
    container: {
        backgroundColor: '#1E1F28',
    },
    bar: {
        flexDirection: 'row',
        backgroundColor: '#1E1F28',
        height: 80
    },
    text: {
        color: '#F5F5F5',
        fontSize: 10,
        flex: 1,
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    pic: {
        flex: 5
    }
})

export const Categories: React.FC = () => {
    return (
        <View style={style.wrappingContainer}>
            <StatusBar backgroundColor='#1E1F28' />
                <View >
                    <Header />
                    <Group></Group>
                </View>
            <ScrollView contentContainerStyle={style.container}>
                <View >
                    <Sale></Sale>
                </View>
                <View >
                    <TouchableOpacity style={style.categorie}>
                        <Text style={style.text}>
                            New
                        </Text>
                        <Text style={style.pic}>
                            sum pic
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.categorie}>
                        <Text style={style.text}>
                            Clothes
                        </Text>
                        <Text style={style.pic}>
                            sum pic
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.categorie}>
                        <Text style={style.text}>
                            Shoes
                        </Text>
                        <Text style={style.pic}>
                            sum pic
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.categorie}>
                        <Text style={style.text}>
                            Accesories
                        </Text>
                        <Text style={style.pic}>
                            sum pic
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View >
                <NavBar></NavBar>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    wrappingContainer: {
        backgroundColor: '#1E1F28',
        flexDirection: 'column'
    },
    container: {
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
        
    },
    categorie: {
        backgroundColor: '#2A2C36',
        borderRadius: 10,
        marginVertical: 7,
        paddingVertical: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        flex: 3,
        color: '#F5F5F5',
        paddingLeft: 20,
        fontSize: 20
    },
    pic: {
        flex: 3,
        color: '#F5F5F5',
    }
})