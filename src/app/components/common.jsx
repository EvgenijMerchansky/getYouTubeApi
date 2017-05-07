import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './common.scss';

function CommonPage(props) {
  return(
    <div className='block__title'>
      <h1 className='block__title-title'>GET API YouTube</h1>
      <h2 className='block__title-subtitle'>
        <Link className='block__title-subtitle-item' to="/search">Search Videos</Link>
      </h2>
    </div>
  )
}

export default CommonPage
