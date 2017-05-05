import axios from 'axios';
import React from 'react';

export const getApi = (apiUrl) => {
  return function(dispatch){

    axios.get(apiUrl)
    .then(response => {
      const sorteredData = response.data;
      const wrappedData = sorteredData.map((elem, index) => {
        return(
          <li key={index}>{elem.city + ', ' + elem.name + elem.address}</li>
        )
      })
      dispatch({
        type: 'GET_OFFICES',
        payload: wrappedData
      });
    })
  }
}
