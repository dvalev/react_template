import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Providers from './providers';
import CONFIGURATION from './constants/config';

ReactDOM.render(
  <React.StrictMode>
    {CONFIGURATION.USE_REDUX ? (
      <Providers.Redux>
        <App useRedux={CONFIGURATION.USE_REDUX} />
      </Providers.Redux>
    ) : (
        <App useRedux={CONFIGURATION.USE_REDUX} />
      )}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
