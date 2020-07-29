import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    title: string;
    onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
            <LinearGradient
                colors={['#EF3651', 'white']}
                start={{ x: 0, y: 0.25}}
                end={{ x: 0, y: 0}}
                style={[style.container]}>
                <Text style={{
                        backgroundColor: 'transparent',
                        fontSize: 15,
                        color: '#fff',
                    }}>
                    <Text style={style.text}>{title}</Text>
          </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "#EF3651",
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 10
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
        paddingVertical: 15,
    }
})