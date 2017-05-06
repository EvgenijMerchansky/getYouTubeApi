import axios from 'axios';
import React from 'react';

export const query = (arg) => {
    console.log('arg -> ', arg)
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
        key: 'AIzaSyDidihTEViX7bkm17xLglRF51mjonDSw-I'
      },
    }).then(response => {
      const itemData = response.data.items;
      const wrappedData = itemData.map((elem,index) => {
        // console.log(elem.snippet.title)
        return (
          <div key={index}>{elem.snippet.title}</div>
        )
      })
      dispatch({
        type: 'ADD_VALUE',
        payload: wrappedData
      })
    })
  }
}

// https://www.googleapis.com/youtube/v3
