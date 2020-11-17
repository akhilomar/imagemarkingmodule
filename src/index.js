import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Upload from './components/upload';
import Score from './components/score';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Result from './components/result';
const Root=()=>(
  <Router>
      <div>
      <Route path="/" exact component={App}/>
      <Route path="/Home" exact component={App}/>
      <Route path="/Upload" exact component={Upload}/>
      <Route path="/Score" exact component={Score}/>
      <Route path="/Result" exact component={Result}/>
      </div>
  </Router>
 );

 ReactDOM.render(<Root />, document.getElementById('root'));


serviceWorker.unregister();
