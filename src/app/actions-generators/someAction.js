import axios from 'axios';

export const query = (arg) => {
    console.log('arg -> ', arg)
  return function(dispatch){
    const q = arg;
    const generalRequest = axios.get('https://www.googleapis.com/youtube/v3/search',
      {
        data: {
          part : 'id ,snippet',
          q: q,
          type: 'video',
          key: 'AIzaSyDidihTEViX7bkm17xLglRF51mjonDSw-I'
        }
      }
    )
    console.log(generalRequest);
    dispatch({
      type: 'ADD_VALUE',
      payload: generalRequest
    })
  }
}

// https://www.googleapis.com/youtube/v3
