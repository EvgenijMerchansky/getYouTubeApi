import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        const itemData = response.data.items;
        const wrappedData = itemData.map((elem,index) => {
          console.log(elem);
          const basicPath = `http://www.youtube.com/embed/${elem.id.videoId}`
          return (
            <div className='list' key={index}>
              <img className='list__img' src={elem.snippet.thumbnails.default.url}/>
              <Link className='list__link' to={`/video-list/video/:${elem.id.videoId}`}>{elem.snippet.title}</Link>
            </div>
          )
        })
      dispatch({
        type: 'ADD_VALUE',
        payload: wrappedData
      })
    })
  }
}
