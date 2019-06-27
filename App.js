/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Dimensions} from 'react-native';
var windowSize = Dimensions.get("window");
import RNVideoPlayer from "./RNVideoPlayer"

const VIMEO_ID = '179859217';
export default class App extends Component {
  constructor() {
    super()
    this.state = {

      videos: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrls: undefined,
      videoUrls: undefined,
    }
  }
  componentDidMount() {
    global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then(res => res.json())
      .then(res => this.setState({
        thumbnailUrls: res.video.thumbs['640'],
        videoUrls: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
        videos: res.video,
      }));
  }
  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={{ height: windowSize.width / 1.4, width: windowSize.width }}>
          <RNVideoPlayer
            videoWidth={400}
            videoHeight={225}
            loop={false}
            video={this.state.videos}
            thumbnailUrl={this.state.thumbnailUrls}
            videoUrl={this.state.videoUrls}
            endWithThumbnail
            fullScreenOnLongPress
          />
        </View>
      </View>
    );
  }
}