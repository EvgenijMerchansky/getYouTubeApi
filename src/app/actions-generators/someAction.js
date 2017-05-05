import axios from 'axios';

export const query = (arg) => {
  return function(dispatch){
    const q = arg;
    const generalRequest = axios.get('https://www.googleapis.com/youtube/v3')
    // /-/-/-/-/-/-/-/- построить запрос по поиску с переменной "q" ! ! !
    // const int = gapi.client.youtube.search.list({
    //   q: q,
    //   part: 'snippet'
    // });
    // /-/-/-/-/-/-/-/- построить запрос по поиску с переменной "q" ! ! !
    dispatch({
      type: 'ADD_VALUE',
      payload: generalRequest
    })
  }
}

// https://www.googleapis.com/youtube/v3
