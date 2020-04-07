var searchYouTube = (options, callback) => {
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
    error: function(response) {
      console.error('ajax error', response);
    }
  });
};

export default searchYouTube;