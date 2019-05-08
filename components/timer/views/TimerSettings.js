import React, { Component } from 'react'

import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    TextInput
} from 'react-native'
import CustomButton from '../../customButton/CustomButton'

export default class TimerSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workInterval: 0,
            workMins: '00',
            workSecs: '00',
            restInterval: 0,
            restMins: '00',
            restSecs: '00',
        }
    }

    formatInterval(interval) {
        // format the seconds input into minutes and seconds string for display
    }

    componentWillMount() {

    }


    updateInterval(target) {
        let minutes = this.state[]
    }

    render() {
        return (
            <View style={{flexDirection: "column", alignItems: "center"}}>
                <Text style={{ justifyContent: "center"
                    }}> Work Interval </Text>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState((prevState) => {
                            prevState.work.value: text.replace(/\D+/g, 'e')
                        }
                        )}
                        
                        onEndEditing={this.updateInterval()}
                        style={{
                            justifyContent: "flex-start",
                        }}
                        value={this.state.workMins}
                        maxLength={2}
                    />

                    <Text style={{
                        textAlignVertical: "center"
                    }}> :  </Text>

                    <TextInput
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({
                            workSecs: text.replace(/\D+/g, '')
                        }
                        )}
                        onEndEditing={this.props.setSeconds}
                        style={{ justifyContent: "flex-end" }}
                        value={this.state.workSecs}
                        maxLength={2}
                    />
                </View>

                <Text style={{ textAlign: "center"
                    }}> Rest Interval </Text>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({
                            rest: { minutes: text.replace(/\D+/g, '') }
                        })}
                        value={this.state.restMins}
                        style={{ justifyContent: "flex-start" }}
                        maxLength={2}
                    />

                    <Text style={{
                        textAlignVertical: "center"
                    }}> :  </Text>

                    <TextInput
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({
                            rest: { seconds: text.replace(/\D+/g, '') }
                        })}
                        value={this.state.restSecs}
                        style={{ justifyContent: "flex-end" }}
                        maxLength={2}
                    />

                </View>
            </View>
        )
    }


}
