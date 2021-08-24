import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import NavigationBar from './components/NavigationBar';

const Site = () => {
  return (
    <Router>
      <NavigationBar />
    </Router>
  )
}

ReactDOM.render(<Site />, document.getElementById('root'))