import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Button, Text, View } from 'react-native';


export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 'START',
            counting: false,
            time: 10,
        }
        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
        this.style = StyleSheet.create({
            container: {
                //flex: 1,
                backgroundColor: 'powderblue',
                flexDirection: 'column',
                alignContent: 'flex-end',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height * 0.3,
            },
            button: {
                backgroundColor: 'green',
                height: 85,
                flex: 1,
            },
            display: {
                flex: 2,
                justifyContent: 'flex-end',
            },
            buttonsInterface: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                height: 200,
                backgroundColor: 'red',
            },
        });

    }

    render() {
        return (
            <View style={this.style.container}>
                <View style={this.style.display}>
                    <Text style={this.style.display}>{this.state.time}</Text>
                </View>

                <View style={this.style.buttonsInterface}>
                    <View style={this.style.button}>
                        <Button
                            title={this.state.count}
                            onPress={this.start} />
                    </View>

                    <View style={this.style.button}>
                        <Button
                            title="reset"
                            onPress={this.reset} />
                    </View>

                </View>
            </View>
        )
    }

    start() {
        if (this.state.counting) {
            clearTimeout(this.timer);
            this.setState({
                count: 'START',
            });
        } else {
            this.setState({
                count: 'STOP'
            });
            this.timer = setInterval(() => {
                this.setState({
                    time: this.state.time - 1,
                    counting: this.state.counting,
                })
            }, 1000);
        }
        this.setState({
            counting: !this.state.counting,
        });
    }

    reset() {
        clearInterval(this.timer);
        this.setState({
            count: 'START',
            counting: false,
            time: 10,
        });
    }

    componentDidUpdate() {
        if (this.state.time === 0) {
            clearTimeout(this.timer);

            if (this.state.counting) {
                this.timer = setInterval(() => {
                    this.setState({
                        time: this.state.time + 1,
                    })
                }, 1000);
            }
        }
    }


    componentWillUnmount() {
        clearInterval(this.theInterval)
    }
}



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: Dimensions.get('window').width,
//         height: 50,
//     },
//     button: {
//         flex: 1,
//         width: 200,
//         height: 500,
//     },
//     display: {
//         flex: 1,
//         width: 100,
//         justifyContent: 'center',
//     }
// });