import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './search.scss';

import { query, deleteItem } from '../actions-generators/singleAction';

class Search extends React.Component{
  render(){
    console.log(this);
    const listItem = this.props.queryReducer.info;
    const wrapped = listItem.map((elem, index) => {
      return (
        <div className='list' key={index}>
          <img className='list__img' src={elem.snippet.thumbnails.default.url}/>
          <Link className='list__link' to={`/video-list/video/:${elem.id.videoId}`}>{elem.snippet.title}</Link>
          <button className='list__delete' onClick={() => this.props.deleteItem(elem.id)}>delete</button>
        </div>
      )
    })
    return(
      <div className='item__container'>
        <input ref={(input) => {this.inputValue = input}} placeholder='Search' type='text' id='some'/><button onClick={(e) => this.props.query(this.inputValue.value)} type='button'>Search</button>
        <div>{wrapped}</div>
      </div>
    )
  }
}

function officesState(state) {
  return{
    queryReducer: state.queryReducer
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({
    query,
    deleteItem
  },dispatch)
}

export default connect(officesState,MapDispatchToProps)(Search)
