import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Button,
    Text,
    View,
    Animated,
    TextInput
} from 'react-native';

import CustomButton from '../customButton/CustomButton.js'
import Countdown from './views/Countdown.js'
import TimerSettings from './views/TimerSettings'


export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'START',
            counting: false,
            count: 0,
            display: "00 : 00",
            work: false,
            countStarted: false,
            configure: false,
        }
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
        this.workInterval = 8;
        this.restInterval = 5;
    }

    render() {
        if (true) {
            return <TimerSettings/>
        } else {
            return <Countdown
                onPressStart={this.start}
                onPressReset={this.reset}
                text={
                    {
                        button: this.state.buttonText,
                        display: this.state.display,
                    }}
            />

        }
    }

    static formatDisplay(interval) {
        let minutes = Math.floor(interval / 60);
        let seconds = (interval % 60).toString();

        if (minutes > 9) {
            minutes = minutes.toString();
        } else {
            minutes = "0" + minutes.toString();
        }

        if (seconds > 9) {
            seconds = seconds.toString();
        } else {
            seconds = "0" + seconds.toString();
        }



        return minutes + " : " + seconds
    }

    setTimerInterval() {

    }

    start() {

        if (this.state.counting) {
            clearTimeout(this.timer);
            this.setState({
                buttonText: 'START',
                counting: !this.state.counting,
            });
        } else {
            this.setState({
                buttonText: 'STOP',
                counting: !this.state.counting
            });

            // set count to proper work or rest interval
            if (!this.state.countStarted) {
                this.setState({
                    work: true,
                    count: this.workInterval,
                    countStarted: !this.state.countStarted
                });
            }

            this.timer = setInterval(() => {
                this.setState({
                    count: this.state.count - 1,
                    display: Timer.formatDisplay(this.state.count)
                });
            }, 1000);
        }
    }

    reset() {
        clearInterval(this.timer);
        this.setState({
            buttonText: 'START',
            count: this.workInterval,
            counting: false,
            display: Timer.formatDisplay(this.workInterval)
        });
    }

    componentDidUpdate() {
        if (this.state.count === 0 & this.state.counting) {
            clearTimeout(this.timer);

            if (this.state.work) {
                this.setState({
                    work: !this.state.work,
                    count: this.restInterval,
                });
            } else {
                this.setState({
                    work: !this.state.work,
                    count: this.workInterval,
                });
            }

            this.timer = setInterval(() => {
                this.setState({
                    count: this.state.count - 1,
                    display: Timer.formatDisplay(this.state.count)
                });
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentWillMount() {
        this.setState({
            display: Timer.formatDisplay(this.workInterval)
        });

    }

}


// const configureTimerDisplay = () => {

//     return <View>
//         <Text>
//             Timer Settings
//         </Text>
//     </View>

// }


// ============ code replaced by CountDownDisplay component in timer
// const countdownDisplay = (onPress, text, style) => {
//     return <View style={style.container}>
//         <View style={style.display}>
//             <Text
//                 style={style.displayText}
//                 //editable={!this.state.counting}
//             >{text.display}</Text>
//         </View>

//         <View style={style.buttonsInterface}>
//             <CustomButton
//                 onPress={onPress.start}
//                 buttonText={text.buttonText}
//                 buttonStyle={style.buttonStart}
//                 textStyle={style.mainButtonText}
//             />
//             <CustomButton
//                 onPress={onPress.reset}
//                 buttonText='RESET'
//                 buttonStyle={style.buttonReset}
//                 textStyle={style.resetButtonText}
//             />
//         </View>
//     </View>;
// }

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
