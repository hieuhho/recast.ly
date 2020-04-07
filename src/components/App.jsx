// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import searchYouTube from './lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: 'react',
      max: 5
    };
    searchYoutube(options, data);
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search props=""/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video=""/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList props=""/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;