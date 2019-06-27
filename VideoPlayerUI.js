import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class VideoPlayerUI extends Component {
    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.stop()}
                    title="Stop"
                    color="#841584"
                />
                 <Button
                    onPress={() => this.props.pause()}
                    title="Pause"
                    color="#841584"
                />
                 <Button
                    onPress={() => this.props.resume()}
                    title="Resume"
                    color="#841584"
                />
            </View>
        );
    }
}