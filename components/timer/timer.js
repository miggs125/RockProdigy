import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


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
    }

    render() {
        return (
            <View>
                <Text>{this.state.time}</Text>
                <Button
                    title={this.state.count}
                    onPress={this.start} />
                <Button
                    title="reset"
                    onPress={this.reset}/>
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
                count:  'STOP'
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

    countDown() {
        if (this.state.counting) {
            this.theInterval = setInterval(() => {
                this.setState(prevState => ({
                    count: prevState.count - 1,
                })
                );
            });
        } else clearTimeout(this.theInterval)
    }

    componentDidUpdate() {
        if (this.state.count === 0){
            
        }
    }


    componentWillUnmount() {
        clearInterval(this.theInterval)
    }
}
