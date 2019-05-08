import React from 'react'

import {
    Text,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native'

import CustomButton from '../../customButton/CustomButton'

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.25,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    buttonsContainer: {
        height: 100,
    },

    buttonStart: {
        backgroundColor: 'green',
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonReset: {
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    display: {
        flex: 3,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonsInterface: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 65,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    mainButtonText: {
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
    },
    resetButtonText: {
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
        color: '#b7b7b7'
    },
    displayText: {
        fontSize: 50,
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        color: 'black'
    }
});

const Countdown = ({onPressReset, onPressStart, text}) => {
    return <View style={style.container}>
        <View style={style.display}>
            <Text
                style={style.displayText}
                //editable={}
            >{text.display}</Text>
        </View>

        <View style={style.buttonsInterface}>
            <CustomButton
                onPress={onPressStart}
                buttonText={text.button}
                buttonStyle={style.buttonStart}
                textStyle={style.mainButtonText}
            />
            <CustomButton
                onPress={() => onPressReset()}
                buttonText='RESET'
                buttonStyle={style.buttonReset}
                textStyle={style.resetButtonText}
            />
        </View>
    </View>;
}
export default Countdown;