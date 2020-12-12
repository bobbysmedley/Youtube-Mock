import axios from 'axios';

const KEY = 'AIzaSyDwlYMx_VjFJgn74LYj_sI1Qxr89PSe1xo';

export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: '5',
      key: KEY
    }
});

