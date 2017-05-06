import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import store from './store';
import CommonPage from './app/components/common.jsx';
import Search from './app/containers/search.jsx';
import VideoPage from './app/containers/video.jsx';

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <Route exact path='/' component={CommonPage}/>
            <Route path='/search' component={Search}/>
            <Route path='/video-list/video' component={VideoPage}/>
          </div>
        </Router>
      </div>
    )
  }
}
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('content')
);
