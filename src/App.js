import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './services/history';
import Routes from './routes';
import './config/ReactotronConfig';
import GlobalStyle from './styles/Global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />;
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
