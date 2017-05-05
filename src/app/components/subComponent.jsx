import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './subComponent.scss';

function Subclass(props) {
  return(
    <div className='block__title'>
      <h1 className='block__title-title'>PrivatBank Search Offices</h1>
      <h2 className='block__title-subtitle'>
        <Link className='block__title-subtitle-item' to="/offices">Найти отделение</Link>
      </h2>
    </div>
  )
}

export default Subclass
