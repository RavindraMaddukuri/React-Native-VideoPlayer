//  To use this component we need to install the modules given below
//         react-native-video-player
//  link for the module : "https://www.npmjs.com/package/react-native-video-player"


import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
var windowSize = Dimensions.get("window");
import VideoPlayer from 'react-native-video-player';
import VideoPlayerUI from "./VideoPlayerUI"
export default class RNVideoComp extends Component {
  constructor() {
    super();
this.state={
    muted: false,
    duration: 0.0,
    paused: true,
}

  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 22, marginTop: 22 }}>React Native Video Player</Text>
             <TouchableOpacity style={{width:windowSize.width,height:windowSize.width/1.5,}} onPress={() => {this.setState({paused: !this.state.paused})}}>
        <VideoPlayer
         {...this.props}
          thumbnail={{ uri: this.props.thumbnailUrl }}
          video={{ uri: this.props.videoUrl }}
          videoWidth={this.props.videoWidth}
          videoHeight={this.props.videoHeight}
          loop={this.props.loop}
          duration={this.props.video.duration}
          ref={r => this.player = r}
        />
         </TouchableOpacity>
         <VideoPlayerUI
         stop={() =>this.player.stop()}
         pause={() =>this.player.pause()}
         resume={() =>this.player.resume()}
         />
      </View>
    );
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});