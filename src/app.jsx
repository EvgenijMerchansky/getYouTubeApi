import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import store from './store';
import Subclass from './app/components/subComponent.jsx';
import Offices from './app/containers/offices.jsx';
import RegionCenter from './app/containers/regionCenter.jsx';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Subclass}/>
          <Route path='/offices' component={Offices}/>
          <Route path='/offices/region' component={RegionCenter}/>
        </div>
      </Router>
    )
  }
}
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('content')
);
