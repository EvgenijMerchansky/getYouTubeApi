import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { query } from '../actions-generators/someAction';
// import * as constants from '../constants/constants';
import styles from './office.scss';

class Offices extends React.Component{
  render(){
    console.log(this);
    return(
      <div className='item__container'>
        <input ref={(input) => {this.inputValue = input}} type='text' id='some'/><button onClick={(e) => this.props.query(this.inputValue.value)} type='button'>Search</button>
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
    query
  },dispatch)
}

export default connect(officesState,MapDispatchToProps)(Offices)
