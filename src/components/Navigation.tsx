import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Home } from './../../svgs/Home.js'

interface Props {
    title: string,
    active: boolean,
    icon: ReactNode,
}

const NavigationTab: React.FC<Props> = ({ title, active, icon }) => {
    return (
        <>
            <StatusBar backgroundColor='#1E1F28' />
            <View style={tabStyle.container}>
                { icon }
                <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
            </View>
        </>
    )
}

const tabStyle = StyleSheet.create({
    container: {
        backgroundColor: '#1E1F28',
        flex: 1,
        height: 48,
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        alignSelf: 'center',
        fontSize: 10,
        lineHeight: 10,
        paddingTop: 5
    },
    textActive: {
        color: '#EF3651',

    },
    textInactive: {
        color: '#ABB4BD',

    },
    picture: {
        
    }
})

export const Navigation: React.FC = () => {
    return (
        <View style={style.container}>
            <NavigationTab title="Home" active={false} icon={<Home />} />
            <NavigationTab title="Shop" active={false} icon={<Home />} />
            <NavigationTab title="Bag" active={false} icon={<Home />} />
            <NavigationTab title="Favourites" active={false} icon={<Home />} />
            <NavigationTab title="Profile" active={false} icon={<Home />} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})