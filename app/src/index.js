// this is actually client code just for react-scripts to pick it up

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';

// syncMode
// ReactDOM.render(<App />, document.getElementById('root'));

// concurrentMode
const container = document.getElementById('root');
const root = ReactDOM.unstable_createRoot(container);
root.render(
  <div>
    <h3 style={{ textAlign: 'center' }}>
      <em>Characters of</em> Stan Lee
    </h3>
    <App />
  </div>
);
