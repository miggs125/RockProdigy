import React from 'react'

import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
} from 'react-native'

const RippleButton = ({ onPress, buttonText, buttonStyle, textStyle,}) => {
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
                onPress();
            }}
        >
        <View style={textStyle}>
        <Text>
                {buttonText}
            </Text>
        </View>
            
        </TouchableOpacity>
    )
}

export default RippleButton;