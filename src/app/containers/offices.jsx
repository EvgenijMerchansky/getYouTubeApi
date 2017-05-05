import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getApi } from '../actions-generators/getLocationOffices';
import * as constants from '../constants/constants';
import styles from './office.scss';

class Offices extends React.Component{
  render(){
    console.log(this);
    return(
      <div className='item__container'>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KH)}}>KHARKOV</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KIEV)}}>KIEV</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_LV)}}>LVIV</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_OD)}}>ODESSA</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_VIN)}}>VINNITSA</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_DNEPR)}}>DNEPROPETROVSK</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_JIT)}}>JITOMIR</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_ZAP)}}>ZAPOROJE</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_LUG)}}>LUGANSK</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_NIK)}}>NIKOLAEV</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_POLT)}}>POLTAVA</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_SUMY)}}>SUMMY</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KHMEL)}}>KHMELNITSKY</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_CHER)}}>CHERNIGOV</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_DON)}}>DONETSK</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_IF)}}>IVANO-FRANKOVSK</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KIR)}}>KIROVOGRAD</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_ROV)}}>ROVNO</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_TER)}}>TERNOPOL</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KHERS)}}>KHERSON</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_CHERKS)}}>CHERKASY</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_CRNVC)}}>CHERNOVCY</Link>
        <Link className='item__container-item' to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_SEV)}}>SEVASTOPOL</Link>
      </div>
    )
  }
}

function officesState(state) {
  return{
    offices: state.officeReducer
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({
    getApi
  },dispatch)
}

export default connect(officesState,MapDispatchToProps)(Offices)
