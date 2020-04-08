// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      search: 'Type something',
      debounce: 500
    };
  }


  componentDidMount() {
    this.getVideos('baby shark');
  }

  getVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 5
    };
    searchYouTube(options, videos =>
      this.setState({
        currentVideo: videos[0],
        videos: videos
      })
    );
  }

  videoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleSearchInput(event) {
    this.setState({
      search: event
    });
    clearTimeout(this.state.debounce);
    this.setState({
      debounce: setTimeOut(() => getVideos(event), 500)
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search
              search={this.state.search}
              onChange={(event) => this.handleSearchInput(event)}
            /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.videos} videoClick={this.videoClick.bind(this)}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;