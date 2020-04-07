var searchYouTube = (options, callback, errorcallback = null) => {
  // TODO
  let youtubeData = {
    part: 'snippet',
    maxResults: options.max,
    q: options.query,
    type: 'video',
    videoEmbeddable: true,
    key: options.key
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: youtubeData,
    contentType: 'application/json',
    success: function(data) {
      callback(data.items);
      console.log('ajax success');
    },
    error: errorcallback || function(data) {
      console.error('ajax error');
    }
  });
};

export default searchYouTube;
