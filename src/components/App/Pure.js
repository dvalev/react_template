import React from 'react';
import './App.css';
import Providers from '../../providers';

function App(props) {
  return (
    <Providers.SocketIO useRedux={props.useRedux} setSocket={props.setSocket}>
      <Providers.Intl useRedux={props.useRedux} setIntl={props.setIntl}>
        <Providers.Theme>
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
                </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
                </a>
          </header>
        </Providers.Theme>
      </Providers.Intl>
    </Providers.SocketIO>
  );
}

export default App;
