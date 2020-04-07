var searchYouTube = (options, callback) => {
  // TODO
  let youtubeData = {
    part: 'snippet',
    maxResults: 10,
    q: options,
    type: 'video',
    videoEmbeddable: true
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: youtubeData,
    contentType: 'application/json',
    success: function(data) {
      console.log('ajax success');
    },
    error: function(data) {
      console.log('ajax error');
    }
  });
};

export default searchYouTube;
