import axios from 'axios';
import React from 'react';

import styles from './singleAction.scss';

export const query = (arg) => {
  return function(dispatch){
    const q = arg;
    const generalRequest = axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
      method: 'get',
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      params: {
        part : 'id ,snippet',
        q: q,
        type: 'video',
        key: 'AIzaSyDidihTEViX7bkm17xLglRF51mjonDSw-I',
        maxResults: 10
      }
    }).then(response => {
      dispatch({
        type: 'ADD_VALUE',
        payload: response.data.items
      })
    })
  }
}
