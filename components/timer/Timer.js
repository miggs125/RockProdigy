import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Button,
    Text,
    View,
    Animated,
} from 'react-native';

import RippleButton from '../customButton/RippleButton.js'
import { typeAlias } from '@babel/types';


export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'START',
            counting: false,
            workInterval: 10,
            restInterval: 5,
            count: 0,
            display: "00 : 00",
            work: false,
            countStarted: false,
        }
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
        this.workInterval = 10;
        this.restInterval = 10;
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.display}>
                    <Text style={style.displayText}>{this.state.display}</Text>
                </View>

                <View style={style.buttonsInterface}>
                    <RippleButton
                        onPress={this.start}
                        buttonText={this.state.buttonText}
                        buttonStyle={style.buttonStart}
                        textStyle={style.mainButtonText}
                    />
                    <RippleButton
                        onPress={this.reset}
                        buttonText='RESET'
                        buttonStyle={style.buttonReset}
                        textStyle={style.resetButtonText}
                    />
                </View>
            </View>
        )
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

        // clear timeout if counting
        if (this.state.counting) {
            clearTimeout(this.timer);
            this.setState({
                buttonText: 'START',
            });
        } else {
            this.setState({
                buttonText: 'STOP',
            });

            // set count to proper work or rest interval
            if (!this.state.countStarted)
                if (this.state.work)
                    this.setState({
                        count: this.workInterval
                    });
                else
                    this.setState({
                        count: this.restInterval
                    });

            this.timer = setInterval(() => {

                this.setState({
                    count: this.state.count - 1,
                    counting: !this.state.counting,
                    display: Timer.formatDisplay(this.state.count)
                });
            }, 1000);
        }

        this.setState({
            counting: !this.state.counting,
        });
    }

    reset() {
        clearInterval(this.timer);
        this.setState({
            count: 0,
            counting: false,
            workInterval: 10,
            restInterval: 5,
            display: Timer.formatDisplay(0)
        });
    }

    componentDidUpdate() {
        if (this.state.count === 0 && this.state.counting) {
            clearTimeout(this.timer);
            
            if (this.state.work) {
                this.setState({
                    work: !this.state.work,

                });
            }

            if (this.state.counting) {
                this.timer = setInterval(() => {
                    this.setState({
                        seconds: this.state.seconds + 1,
                        display: this.formatDisplay(this.state.seconds),
                    })
                }, 1000);
            }
        }

    }


    componentWillUnmount() {
        clearInterval(this.theInterval)
    }

    styleButton() {
        return {

        }
    }
}

const style = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: 'powderblue',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.25,
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
        backgroundColor: 'red',
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
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
    }
});
