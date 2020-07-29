import React from 'react'
import { TouchableOpacity, Text , StyleSheet} from 'react-native'

interface Props {
    title: string;
    onPress: () => void;
}

export const ForgotPass: React.FC<Props> = ({title, onPress }) => {
    return (
            <TouchableOpacity style={style.container} onPress={onPress}>
                <Text style={style.text}>{title}</Text>
            </TouchableOpacity>
        );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "#1E1F28",
        alignItems: 'flex-end'
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20
    }
})